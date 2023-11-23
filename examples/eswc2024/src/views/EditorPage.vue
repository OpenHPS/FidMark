<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Semantic Description</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Semantic Description</ion-title>
        </ion-toolbar>
      </ion-header>

      <div id="editor"></div>
      
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import { Options, Vue } from 'vue-property-decorator';
import loader from "@monaco-editor/loader";
import { Registry } from 'monaco-textmate';
import { wireTmGrammars } from 'monaco-editor-textmate';
import { editor } from 'monaco-editor';
import { ArUcoMarker } from '@/models';
import { Absolute3DPosition, Orientation } from '@openhps/core';
import { RDFSerializer } from '@openhps/rdf';

const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

@Options({
  components: {
    IonPage, IonHeader, IonToolbar, IonTitle, IonContent
  }
})
export default class EditorPage extends Vue {
  editor: editor.IStandaloneCodeEditor;

  mounted(): void {
    loader.init().then((monaco) => {
      monaco.editor.setTheme(prefersDark.matches ? 'vs-dark' : 'vs');
      const registry = new Registry({
        getGrammarDefinition: async () => {
          return {
            format: 'json',
            content: await (await fetch(`assets/grammars/turtle.tmLanguage.json`)).text()
          }
        }
      });
      const grammars = new Map();
      grammars.set('turtle', 'source.ttl');

      monaco.languages.register({ id: "turtle" });
      this.editor = monaco.editor.create(document.getElementById("editor"), 
        {
          value: "",
          language: "turtle",
          minimap: { enabled: false },
        });
      return wireTmGrammars(monaco, registry, grammars, this.editor);
    }).then(() => {
      return this.loadExample();
    }).catch(console.error);
  }

  get value(): string {
    return this.editor.getValue();
  }

  async loadExample() {
    const marker = new ArUcoMarker();
    marker.identifier = 10;
    marker.setPosition(new Absolute3DPosition(0, 0, 0));
    marker.position.orientation = Orientation.fromEuler({
      pitch: 0,
      yaw: 0,
      roll: 0
    });
    const turtle = await RDFSerializer.stringify(marker, {
      prettyPrint: true,
      baseUri: "http://example.org/",
      prefixes: {
        fidmark: "http://purl.org/fidmark/",
        example: "http://example.org/"
      }
    });
    this.editor.setValue(turtle);
  }
}
</script>

<style scoped>
#editor {
  width: 100%;
  height: 100%;
}
</style>
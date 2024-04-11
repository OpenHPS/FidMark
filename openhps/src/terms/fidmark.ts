type IriString = `${'http' | 'https'}://${string}`;
type Property = IriString; // eslint-disable-line
type Class = IriString; // eslint-disable-line
type Datatype = IriString; // eslint-disable-line
type OwlClass = IriString; // eslint-disable-line
type OwlObjectProperty = IriString; // eslint-disable-line
type OwlDatatypeProperty = IriString; // eslint-disable-line
type HydraResource = IriString; // eslint-disable-line
type HydraClass = IriString; // eslint-disable-line
type HydraLink = IriString; // eslint-disable-line
type HydraTemplatedLink = IriString; // eslint-disable-line
type HydraVariableRepresentation = IriString; // eslint-disable-line
type OtherIndividual = IriString; // eslint-disable-line

/**
 * Fiducial marker
 *
 * A fiducial marker or fiducial is an object placed in the field of view of an imaging system that appears in the image produced, for use as a point of reference or a measure. It may be either something placed into or on the imaging subject, or a mark or set of marks in the reticle of an optical instrument.
 *
 * http://purl.org/fidmark/FiducialMarker
 */
export const FiducialMarker: OwlClass = 'http://purl.org/fidmark/FiducialMarker';

/**
 * Marker dictionary
 *
 * A marker dictionary is a specified encoding that produces a set of identifiers that can be used for markers.
 *
 * http://purl.org/fidmark/MarkerDictionary
 */
export const MarkerDictionary: OwlClass = 'http://purl.org/fidmark/MarkerDictionary';

/**
 * Image descriptor
 *
 * An image descriptor is a visual descriptor of a fiducial marker.
 *
 * http://purl.org/fidmark/ImageDescriptor
 */
export const ImageDescriptor: OwlClass = 'http://purl.org/fidmark/ImageDescriptor';

/**
 * Circular barcode
 *
 * A circular barcode is made up of a series of concentric circles and is typically based on a standard barcode symbology. The barcode is thus readable by the same devices used to read traditional barcodes. The circular barcode can be scanned from any angle. The reading is not influenced by the orientation of the symbol. The redundancy in information ensures a good reading in every case, even if the surface is partially damaged.
 *
 * http://purl.org/fidmark/CircularBarcode
 */
export const CircularBarcode: OwlClass = 'http://purl.org/fidmark/CircularBarcode';

/**
 * Algebraic Perspective-Three-Point (AP3P) pose computation
 *
 *
 *
 * http://purl.org/fidmark/AP3PPoseComputation
 */
export const AP3PPoseComputation: OwlClass = 'http://purl.org/fidmark/AP3PPoseComputation';

/**
 * Perspective-n-Point (PnP) pose computation
 *
 * The pose computation problem consists in solving for the rotation and translation that minimizes the reprojection error from 3D-2D point correspondences.
 *
 * http://purl.org/fidmark/PnPPoseComputation
 */
export const PnPPoseComputation: OwlClass = 'http://purl.org/fidmark/PnPPoseComputation';

/**
 * Augmented Reality (AR) platform
 *
 *
 *
 * http://purl.org/fidmark/ARPlatform
 */
export const ARPlatform: OwlClass = 'http://purl.org/fidmark/ARPlatform';

/**
 * ARTag
 *
 * An ARTag is a fiducial marker system to support 3D registration (alignment) and pose tracking in augmented reality. They can be used to facilitate the appearance of virtual objects, games, and animations within the real world. Like the earlier ARToolKit system, they allow for video tracking capabilities that calculate a camera's position and orientation relative to physical markers in real time. Once the camera's position is known, a virtual camera can be positioned at the same point, revealing the virtual object at the location of the ARTag. It thus addresses two of the key problems in Augmented Reality: viewpoint tracking and virtual object interaction. An ARTag appears on the Mars Science Laboratory.A similar technique is being used by NASA's Spacecraft 3D smartphone app as an educational outreach tool. ARTag is supported by the open source Goblin XNA software.
 *
 * http://purl.org/fidmark/ARTag
 */
export const ARTag: OwlClass = 'http://purl.org/fidmark/ARTag';

/**
 * 2D barcode
 *
 * Two-dimensional (2D) use rectangles, dots, hexagons and other patterns, called matrix codes or 2D barcodes, although they do not use bars as such. 2D barcodes can be read using purpose-built 2D optical scanners, which exist in a few different forms. 2D barcodes can also be read by a digital camera connected to a microcomputer running software that takes a photographic image of the barcode and analyzes the image to deconstruct and decode the 2D barcode. A mobile device with an inbuilt camera, such as smartphone, can function as the latter type of 2D barcode reader using specialized application software (The same sort of mobile device could also read 1D barcodes, depending on the application software).
 *
 * http://purl.org/fidmark/Barcode2D
 */
export const Barcode2D: OwlClass = 'http://purl.org/fidmark/Barcode2D';

/**
 * ARToolKit
 *
 * ARToolKit is an open-source computer tracking library for creation of strong augmented reality applications that overlay virtual imagery on the real world. Currently, it is maintained as an open-source project hosted on GitHub. ARToolKit is a very widely used AR tracking library with over 160,000 downloads on its last public release in 2004.
 *
 * http://purl.org/fidmark/ARToolKit
 */
export const ARToolKit: OwlClass = 'http://purl.org/fidmark/ARToolKit';

/**
 * Barcode
 *
 * A barcode or bar code is a method of representing data in a visual, machine-readable form.
 *
 * http://purl.org/fidmark/Barcode
 */
export const Barcode: OwlClass = 'http://purl.org/fidmark/Barcode';

/**
 * Active marker
 *
 * An active fiducial marker is a dynamic marker that can dynamically change its visual appearance in order to enable detection or identification.
 *
 * http://purl.org/fidmark/ActiveMarker
 */
export const ActiveMarker: OwlClass = 'http://purl.org/fidmark/ActiveMarker';

/**
 * AprilTag
 *
 * AprilTag is a visual fiducial system, useful for a wide variety of tasks including augmented reality, robotics, and camera calibration. Targets can be created from an ordinary printer, and the AprilTag detection software computes the precise 3D position, orientation, and identity of the tags relative to the camera. The AprilTag library is implemented in C with no external dependencies. It is designed to be easily included in other applications, as well as be portable to embedded devices. Real-time performance can be achieved even on cell-phone grade processors.
 *
 * http://purl.org/fidmark/AprilTag
 */
export const AprilTag: OwlClass = 'http://purl.org/fidmark/AprilTag';

/**
 * ArUco
 *
 * An ArUco marker is a synthetic square marker composed by a wide black border and an inner binary matrix which determines its identifier (id). The black border facilitates its fast detection in the image and the binary codification allows its identification and the application of error detection and correction techniques. The marker size determines the size of the internal matrix. For instance a marker size of 4x4 is composed by 16 bits.
 *
 * http://purl.org/fidmark/ArUco
 */
export const ArUco: OwlClass = 'http://purl.org/fidmark/ArUco';

/**
 * Passive marker
 *
 *
 *
 * http://purl.org/fidmark/PassiveMarker
 */
export const PassiveMarker: OwlClass = 'http://purl.org/fidmark/PassiveMarker';

/**
 * 1D barcode
 *
 * A barcode or bar code is a method of representing data in a visual, machine-readable form. Initially, barcodes represented data by varying the widths, spacings and sizes of parallel lines. These barcodes, now commonly referred to as linear or one-dimensional (1D), can be scanned by special optical scanners, called barcode readers, of which there are several types.
 *
 * http://purl.org/fidmark/Barcode1D
 */
export const Barcode1D: OwlClass = 'http://purl.org/fidmark/Barcode1D';

/**
 * BinaryID
 *
 *
 *
 * http://purl.org/fidmark/BinaryID
 */
export const BinaryID: OwlClass = 'http://purl.org/fidmark/BinaryID';

/**
 * BullsEye
 *
 *
 *
 * http://purl.org/fidmark/BullsEye
 */
export const BullsEye: OwlClass = 'http://purl.org/fidmark/BullsEye';

/**
 * CALTag
 *
 * CALTag is a self-identifying marker pattern that can be accurately and automatically detected in images. Detection is robust to occlusions, uneven illumination and moderate lens distortion.
 *
 * Chequerboards are often used for camera calibration, with the interior saddle points providing the necessary point correspondences. Manual identification of these points is at best tedious, and at worst, infeasible and unreliable (especially when calibrating large arrays of cameras). By augmenting the pattern with self-identifying binary codes, much like the excellent ARTag system, this process can be automated.
 *
 * Whereas ARTag has highly robust error detection and correction, it suffers from licence restrictions, and a somewhat inaccurate corner detector. CALTag employs rudimentary error detection, but the code is free to use and modify, and it detects corners using a very accurate saddle-point finder.
 *
 * http://purl.org/fidmark/CALTag
 */
export const CALTag: OwlClass = 'http://purl.org/fidmark/CALTag';

/**
 * Concentric contrasting circles
 *
 *
 *
 * http://purl.org/fidmark/CCC
 */
export const CCC: OwlClass = 'http://purl.org/fidmark/CCC';

/**
 * CCTag
 *
 * CCTag markers are a robust, highly accurate fiducial system that can be robustly localized in the image even under challenging conditions. The library can efficiently detect the position of the image of the (common) circle center and identify the marker based on the different ratio of their crown sizes. Each marker can be uniquely identified thanks to the thickness of each crown, which encodes the information of the marker, typically a unique ID.
 *
 * http://purl.org/fidmark/CCTag
 */
export const CCTag: OwlClass = 'http://purl.org/fidmark/CCTag';

/**
 * Chilitags
 *
 * Chilitags are a C++ cross-platform software library for the detection and identification of 2D fiducial markers (a.k.a. tags). Their purpose is to be printed and placed on objects from the real world, to form the basis of Robotics or Augmented Reality (AR) applications. Using a camera, the position of the tagged objects can be acquired by a computer.
 *
 * http://purl.org/fidmark/Chilitags
 */
export const Chilitags: OwlClass = 'http://purl.org/fidmark/Chilitags';

/**
 * ChromaTag
 *
 * ChromaTag is a colored fiducial marker and detection algorithm that is significantly faster than other markers; it uses opponent colors to limit and quickly reject initial false detections and grayscale for precise localization.
 *
 * http://purl.org/fidmark/ChromaTag
 */
export const ChromaTag: OwlClass = 'http://purl.org/fidmark/ChromaTag';

/**
 *
 *
 *
 *
 * http://purl.org/fidmark/Cybercode
 */
export const Cybercode: OwlClass = 'http://purl.org/fidmark/Cybercode';

/**
 * Efficient Perspective-n-Point (EPnP) pose computation
 *
 *
 *
 * http://purl.org/fidmark/EPnPPoseComputation
 */
export const EPnPPoseComputation: OwlClass = 'http://purl.org/fidmark/EPnPPoseComputation';

/**
 * FourierTag
 *
 *
 *
 * http://purl.org/fidmark/FourierTag
 */
export const FourierTag: OwlClass = 'http://purl.org/fidmark/FourierTag';

/**
 * Infinitesimal Plane-Based Pose Estimation (IPPE)
 *
 *
 *
 * http://purl.org/fidmark/IPPEPoseComputation
 */
export const IPPEPoseComputation: OwlClass = 'http://purl.org/fidmark/IPPEPoseComputation';

/**
 * InterSense
 *
 *
 *
 * http://purl.org/fidmark/InterSense
 */
export const InterSense: OwlClass = 'http://purl.org/fidmark/InterSense';

/**
 * Marker detection
 *
 * Marker detection is a procedure where an image sensor (e.g. a camera) detects a fiducial marker in its field of view.
 *
 * http://purl.org/fidmark/MarkerDetection
 */
export const MarkerDetection: OwlClass = 'http://purl.org/fidmark/MarkerDetection';

/**
 * Marker origin
 *
 * Marker origin indicates the origin of the 0-point on the marker's surface.
 *
 * http://purl.org/fidmark/MarkerOrigin
 */
export const MarkerOrigin: OwlClass = 'http://purl.org/fidmark/MarkerOrigin';

/**
 * Marker based pose estimation
 *
 * Marker based pose estimation is a positioning technique that determines a position and orientation from a detected marker.
 *
 * http://purl.org/fidmark/MarkerPoseEstimation
 */
export const MarkerPoseEstimation: OwlClass = 'http://purl.org/fidmark/MarkerPoseEstimation';

/**
 * Markerless pose estimation
 *
 *
 *
 * http://purl.org/fidmark/MarkerlessPoseEstimation
 */
export const MarkerlessPoseEstimation: OwlClass = 'http://purl.org/fidmark/MarkerlessPoseEstimation';

/**
 * MaxiCode
 *
 * MaxiCode is a public domain, machine-readable symbol system originally created by the United Parcel Service in 1992. Suitable for tracking and managing the shipment of packages, it resembles an Aztec Code or QR code, but uses dots arranged in a hexagonal grid instead of square grid.
 *
 * http://purl.org/fidmark/MaxiCode
 */
export const MaxiCode: OwlClass = 'http://purl.org/fidmark/MaxiCode';

/**
 * Multi-ring
 *
 * Multi-ring color fiducials have different number of rings at different fiducial levels. We extend the concentric circular fiducials to multi-ring, multi-size fiducial systems. These provide scalability to fiducial tracking AR. Because the fiducial systems are incremental, they allow the tracking range to be easily extended. The fiducial systems also introduce a large number of unique fiducials, and that makes fiducial identification easier. These fiducial systems help in building large-scale applications by providing a convenient way to unify multiple local coordinate systems.
 *
 * http://purl.org/fidmark/MultiRing
 */
export const MultiRing: OwlClass = 'http://purl.org/fidmark/MultiRing';

/**
 * Perspective-Three-Point (P3P) pose computation
 *
 *
 *
 * http://purl.org/fidmark/P3PPoseComputation
 */
export const P3PPoseComputation: OwlClass = 'http://purl.org/fidmark/P3PPoseComputation';

/**
 * Pi-Tag
 *
 *
 *
 * http://purl.org/fidmark/PiTag
 */
export const PiTag: OwlClass = 'http://purl.org/fidmark/PiTag';

/**
 * Pose output
 *
 *
 *
 * http://purl.org/fidmark/PoseOutput
 */
export const PoseOutput: OwlClass = 'http://purl.org/fidmark/PoseOutput';

/**
 * QR code
 *
 * A QR code (an initialism for quick response code) is a type of matrix barcode (or two-dimensional barcode) invented in 1994 by the Japanese company Denso Wave. A barcode is a machine-readable optical label that can contain information about the item to which it is attached. In practice, QR codes often contain data for a locator, identifier, or tracker that points to a website or application. QR codes use four standardized encoding modes (numeric, alphanumeric, byte/binary, and kanji) to store data efficiently; extensions may also be used.
 *
 * http://purl.org/fidmark/QRCode
 */
export const QRCode: OwlClass = 'http://purl.org/fidmark/QRCode';

/**
 * RuneTag
 *
 *
 *
 * http://purl.org/fidmark/RuneTag
 */
export const RuneTag: OwlClass = 'http://purl.org/fidmark/RuneTag';

/**
 * SIFT
 *
 *
 *
 * http://purl.org/fidmark/SIFT
 */
export const SIFT: OwlClass = 'http://purl.org/fidmark/SIFT';

/**
 * STag
 *
 *
 *
 * http://purl.org/fidmark/STag
 */
export const STag: OwlClass = 'http://purl.org/fidmark/STag';

/**
 * TRIP
 *
 *
 *
 * http://purl.org/fidmark/TRIP
 */
export const TRIP: OwlClass = 'http://purl.org/fidmark/TRIP';

/**
 * TopoTag
 *
 * Fiducial markers have been playing an important role in augmented reality (AR), robot navigation, and general applications where the relative pose between a camera and an object is required. Here we introduce TopoTag, a robust and scalable topological fiducial marker system, which supports reliable and accurate pose estimation from a single image. TopoTag uses topological and geometrical information in marker detection to achieve higher robustness. Topological information is extensively used for 2D marker detection, and further corresponding geometrical information for ID decoding. Robust 3D pose estimation is achieved by taking advantage of all TopoTag vertices. Without sacrificing bits for higher recall and precision like previous systems, TopoTag can use full bits for ID encoding. TopoTag supports tens of thousands unique IDs and easily extends to millions of unique tags resulting in massive scalability.
 *
 * http://purl.org/fidmark/TopoTag
 */
export const TopoTag: OwlClass = 'http://purl.org/fidmark/TopoTag';

/**
 * VisualCode
 *
 *
 *
 * http://purl.org/fidmark/VisualCode
 */
export const VisualCode: OwlClass = 'http://purl.org/fidmark/VisualCode';

/**
 * WhyCode
 *
 *
 *
 * http://purl.org/fidmark/WhyCode
 */
export const WhyCode: OwlClass = 'http://purl.org/fidmark/WhyCode';

/**
 *
 *
 *
 *
 * http://purl.org/fidmark/WhyCon
 */
export const WhyCon: OwlClass = 'http://purl.org/fidmark/WhyCon';

/**
 * reacTIVision
 *
 * reacTIVision is an open source, cross-platform computer vision framework for the fast and robust tracking of fiducial markers attached onto physical objects, as well as for multi-touch finger tracking. It was mainly designed as a toolkit for the rapid development of table-based tangible user interfaces (TUI) and multi-touch interactive surfaces. This framework has been developed by Martin Kaltenbrunner and Ross Bencina as the underlying sensor component of the Reactable, a tangible modular synthesizer that has set the standards for tangible multi-touch applications.
 *
 * http://purl.org/fidmark/reacTIVision
 */
export const reacTIVision: OwlClass = 'http://purl.org/fidmark/reacTIVision';

/**
 * codes
 *
 * A list of codes associated to a dictionary.
 *
 * http://purl.org/fidmark/codes
 */
export const codes: OwlObjectProperty = 'http://purl.org/fidmark/codes';

/**
 * has marker dictionary
 *
 * A marker dictionary defines the different variants that can be achieved using the available encoded bits and error correction.
 *
 * http://purl.org/fidmark/hasDictionary
 */
export const hasDictionary: OwlObjectProperty = 'http://purl.org/fidmark/hasDictionary';

/**
 * has marker height
 *
 * Defines the marker height in a specified unit. This can be used for determining the scale of the marker.
 *
 * http://purl.org/fidmark/hasHeight
 */
export const hasHeight: OwlObjectProperty = 'http://purl.org/fidmark/hasHeight';

/**
 * has image descriptor
 *
 *
 *
 * http://purl.org/fidmark/hasImageDesciptor
 */
export const hasImageDesciptor: OwlObjectProperty = 'http://purl.org/fidmark/hasImageDesciptor';

/**
 * has marker
 *
 * Indicates a marker on an (optical) positioning system
 *
 * http://purl.org/fidmark/hasMarker
 */
export const hasMarker: OwlObjectProperty = 'http://purl.org/fidmark/hasMarker';

/**
 * has origin
 *
 *
 *
 * http://purl.org/fidmark/hasOrigin
 */
export const hasOrigin: OwlObjectProperty = 'http://purl.org/fidmark/hasOrigin';

/**
 * has marker width
 *
 * Defines the marker width in a specified unit. This can be used for determining the scale of the marker.
 *
 * http://purl.org/fidmark/hasWidth
 */
export const hasWidth: OwlObjectProperty = 'http://purl.org/fidmark/hasWidth';

/**
 * is image descriptor of
 *
 *
 *
 * http://purl.org/fidmark/isImageDescriptorOf
 */
export const isImageDescriptorOf: OwlObjectProperty = 'http://purl.org/fidmark/isImageDescriptorOf';

/**
 * part of
 *
 * Describes a feature of interest being part of another feature of interest.
 *
 * http://purl.org/fidmark/partOf
 */
export const partOf: OwlObjectProperty = 'http://purl.org/fidmark/partOf';

/**
 * as image
 *
 * A marker image links to an image URI or base64 representation of the marker.
 *
 * http://purl.org/fidmark/asImage
 */
export const asImage: OwlDatatypeProperty = 'http://purl.org/fidmark/asImage';

/**
 * as NFT
 *
 * Image descriptor as natural feature tracking descriptor
 *
 * http://purl.org/fidmark/asNFT
 */
export const asNFT: OwlDatatypeProperty = 'http://purl.org/fidmark/asNFT';

/**
 * as pattern
 *
 *
 *
 * http://purl.org/fidmark/asPATT
 */
export const asPATT: OwlDatatypeProperty = 'http://purl.org/fidmark/asPATT';

/**
 * as ZFT
 *
 *
 *
 * http://purl.org/fidmark/asZFT
 */
export const asZFT: OwlDatatypeProperty = 'http://purl.org/fidmark/asZFT';

/**
 * CRC
 *
 *
 *
 * http://purl.org/fidmark/crc
 */
export const crc: OwlDatatypeProperty = 'http://purl.org/fidmark/crc';

/**
 * number of crowns
 *
 * Indicates the number of crowns in a circular barcode.
 *
 * http://purl.org/fidmark/crowns
 */
export const crowns: OwlDatatypeProperty = 'http://purl.org/fidmark/crowns';

/**
 * dictionary size
 *
 *
 *
 * http://purl.org/fidmark/dictionarySize
 */
export const dictionarySize: OwlDatatypeProperty = 'http://purl.org/fidmark/dictionarySize';

/**
 * maximum identifiers
 *
 *
 *
 * http://purl.org/fidmark/maxIdentifiers
 */
export const maxIdentifiers: OwlDatatypeProperty = 'http://purl.org/fidmark/maxIdentifiers';

/**
 * hamming distance
 *
 * The minimum hamming distance between two codes
 *
 * http://purl.org/fidmark/hammingDistance
 */
export const hammingDistance: OwlDatatypeProperty = 'http://purl.org/fidmark/hammingDistance';

/**
 * marker bits
 *
 * Marker bits indicates the amount of bits that are available.
 *
 * http://purl.org/fidmark/markerBits
 */
export const markerBits: OwlDatatypeProperty = 'http://purl.org/fidmark/markerBits';

/**
 * marker code
 *
 * Marker hexadecimal code
 *
 * http://purl.org/fidmark/markerCode
 */
export const markerCode: OwlDatatypeProperty = 'http://purl.org/fidmark/markerCode';

/**
 * marker data
 *
 * Encoded information within a marker.
 *
 * http://purl.org/fidmark/markerData
 */
export const markerData: OwlDatatypeProperty = 'http://purl.org/fidmark/markerData';

/**
 * marker identifier
 *
 * If the marker can be identified using a specified dictionary, its identifier can be indicated using this data property.
 *
 * http://purl.org/fidmark/markerIdentifier
 */
export const markerIdentifier: OwlDatatypeProperty = 'http://purl.org/fidmark/markerIdentifier';

/**
 * version
 *
 * The version number of a marker dictionary.
 *
 * http://purl.org/fidmark/version
 */
export const version: OwlDatatypeProperty = 'http://purl.org/fidmark/version';

/**
 * marker color
 *
 * Describes the color of the marker.
 *
 * http://purl.org/fidmark/color
 */
export const color: OtherIndividual = 'http://purl.org/fidmark/color';

/**
 * marker encoding
 *
 * Describes the encoding method of the marker.
 *
 * http://purl.org/fidmark/encoding
 */
export const encoding: OtherIndividual = 'http://purl.org/fidmark/encoding';

/**
 * OpenCV name
 *
 * OpenCV variable/object name
 *
 * http://purl.org/fidmark/opencvName
 */
export const opencvName: OtherIndividual = 'http://purl.org/fidmark/opencvName';

/**
 * marker shape
 *
 * Describes the shape of the marker.
 *
 * http://purl.org/fidmark/shape
 */
export const shape: OtherIndividual = 'http://purl.org/fidmark/shape';

/**
 * supported marker
 *
 * Inidicates the relationship of a dictionary to a marker type.
 *
 * http://purl.org/fidmark/supportedMarker
 */
export const supportedMarker: OtherIndividual = 'http://purl.org/fidmark/supportedMarker';

/**
 * ArUco 4x4 dictionary with 100 tags
 *
 *
 *
 * http://purl.org/fidmark/DICT_4X4_100
 */
export const DICT_4X4_100: OtherIndividual = 'http://purl.org/fidmark/DICT_4X4_100';

/**
 * ArUco 4x4 dictionary with 1000 tags
 *
 *
 *
 * http://purl.org/fidmark/DICT_4X4_1000
 */
export const DICT_4X4_1000: OtherIndividual = 'http://purl.org/fidmark/DICT_4X4_1000';

/**
 * ArUco 4x4 dictionary with 250 tags
 *
 *
 *
 * http://purl.org/fidmark/DICT_4X4_250
 */
export const DICT_4X4_250: OtherIndividual = 'http://purl.org/fidmark/DICT_4X4_250';

/**
 * ArUco 4x4 dictionary with 50 tags
 *
 *
 *
 * http://purl.org/fidmark/DICT_4X4_50
 */
export const DICT_4X4_50: OtherIndividual = 'http://purl.org/fidmark/DICT_4X4_50';

/**
 * ArUco 5x5 dictionary with 100 tags
 *
 *
 *
 * http://purl.org/fidmark/DICT_5X5_100
 */
export const DICT_5X5_100: OtherIndividual = 'http://purl.org/fidmark/DICT_5X5_100';

/**
 * ArUco 5x5 dictionary with 1000 tags
 *
 *
 *
 * http://purl.org/fidmark/DICT_5X5_1000
 */
export const DICT_5X5_1000: OtherIndividual = 'http://purl.org/fidmark/DICT_5X5_1000';

/**
 * ArUco 5x5 dictionary with 250 tags
 *
 *
 *
 * http://purl.org/fidmark/DICT_5X5_250
 */
export const DICT_5X5_250: OtherIndividual = 'http://purl.org/fidmark/DICT_5X5_250';

/**
 * ArUco 5x5 dictionary with 50 tags
 *
 *
 *
 * http://purl.org/fidmark/DICT_5X5_50
 */
export const DICT_5X5_50: OtherIndividual = 'http://purl.org/fidmark/DICT_5X5_50';

/**
 * ArUco 6x6 dictionary with 100 tags
 *
 *
 *
 * http://purl.org/fidmark/DICT_6X6_100
 */
export const DICT_6X6_100: OtherIndividual = 'http://purl.org/fidmark/DICT_6X6_100';

/**
 * ArUco 6x6 dictionary with 1000 tags
 *
 *
 *
 * http://purl.org/fidmark/DICT_6X6_1000
 */
export const DICT_6X6_1000: OtherIndividual = 'http://purl.org/fidmark/DICT_6X6_1000';

/**
 * ArUco 6x6 dictionary with 250 tags
 *
 *
 *
 * http://purl.org/fidmark/DICT_6X6_250
 */
export const DICT_6X6_250: OtherIndividual = 'http://purl.org/fidmark/DICT_6X6_250';

/**
 * ArUco 6x6 dictionary with 50 tags
 *
 *
 *
 * http://purl.org/fidmark/DICT_6X6_50
 */
export const DICT_6X6_50: OtherIndividual = 'http://purl.org/fidmark/DICT_6X6_50';

/**
 * ArUco 7x7 dictionary with 100 tags
 *
 *
 *
 * http://purl.org/fidmark/DICT_7X7_100
 */
export const DICT_7X7_100: OtherIndividual = 'http://purl.org/fidmark/DICT_7X7_100';

/**
 * ArUco 7x7 dictionary with 1000 tags
 *
 *
 *
 * http://purl.org/fidmark/DICT_7X7_1000
 */
export const DICT_7X7_1000: OtherIndividual = 'http://purl.org/fidmark/DICT_7X7_1000';

/**
 * ArUco 7x7 dictionary with 250 tags
 *
 *
 *
 * http://purl.org/fidmark/DICT_7X7_250
 */
export const DICT_7X7_250: OtherIndividual = 'http://purl.org/fidmark/DICT_7X7_250';

/**
 * ArUco 7x7 dictionary with 50 tags
 *
 *
 *
 * http://purl.org/fidmark/DICT_7X7_50
 */
export const DICT_7X7_50: OtherIndividual = 'http://purl.org/fidmark/DICT_7X7_50';

/**
 * AprilTag 16h5 dictionary
 *
 *
 *
 * http://purl.org/fidmark/DICT_APRILTAG_16h5
 */
export const DICT_APRILTAG_16h5: OtherIndividual = 'http://purl.org/fidmark/DICT_APRILTAG_16h5';

/**
 * AprilTag 25h9 dictionary
 *
 *
 *
 * http://purl.org/fidmark/DICT_APRILTAG_25h9
 */
export const DICT_APRILTAG_25h9: OtherIndividual = 'http://purl.org/fidmark/DICT_APRILTAG_25h9';

/**
 * AprilTag 36h10 dictionary
 *
 *
 *
 * http://purl.org/fidmark/DICT_APRILTAG_36h10
 */
export const DICT_APRILTAG_36h10: OtherIndividual = 'http://purl.org/fidmark/DICT_APRILTAG_36h10';

/**
 * AprilTag 36h11 dictionary
 *
 *
 *
 * http://purl.org/fidmark/DICT_APRILTAG_36h11
 */
export const DICT_APRILTAG_36h11: OtherIndividual = 'http://purl.org/fidmark/DICT_APRILTAG_36h11';

/**
 * ARTag dictionary
 *
 *
 *
 * http://purl.org/fidmark/DICT_ARTAG
 */
export const DICT_ARTAG: OtherIndividual = 'http://purl.org/fidmark/DICT_ARTAG';

/**
 * ArUco original dictionary
 *
 *
 *
 * http://purl.org/fidmark/DICT_ARUCO_ORIGINAL
 */
export const DICT_ARUCO_ORIGINAL: OtherIndividual = 'http://purl.org/fidmark/DICT_ARUCO_ORIGINAL';

/**
 * ChilliTags dictionary
 *
 *
 *
 * http://purl.org/fidmark/DICT_CHILLITAGS
 */
export const DICT_CHILLITAGS: OtherIndividual = 'http://purl.org/fidmark/DICT_CHILLITAGS';

/**
 * ArUco MIP 36h12 dictionary
 *
 *
 *
 * http://purl.org/fidmark/DICT_MIP_36h12
 */
export const DICT_MIP_36h12: OtherIndividual = 'http://purl.org/fidmark/DICT_MIP_36h12';

/**
 * reacTIVision amoeba symbology
 *
 *
 *
 * http://purl.org/fidmark/DICT_REACTIVISION_AMOEBA
 */
export const DICT_REACTIVISION_AMOEBA: OtherIndividual = 'http://purl.org/fidmark/DICT_REACTIVISION_AMOEBA';

/**
 * reacTIVision yamaarashi symbology
 *
 *
 *
 * http://purl.org/fidmark/DICT_REACTIVISION_YAMAARASHI
 */
export const DICT_REACTIVISION_YAMAARASHI: OtherIndividual = 'http://purl.org/fidmark/DICT_REACTIVISION_YAMAARASHI';

/**
 * TopoTag 3x3 dictionary
 *
 *
 *
 * http://purl.org/fidmark/DICT_TOPOTAG_3X3
 */
export const DICT_TOPOTAG_3X3: OtherIndividual = 'http://purl.org/fidmark/DICT_TOPOTAG_3X3';

/**
 * TopoTag 4x4 dictionary
 *
 *
 *
 * http://purl.org/fidmark/DICT_TOPOTAG_4X4
 */
export const DICT_TOPOTAG_4X4: OtherIndividual = 'http://purl.org/fidmark/DICT_TOPOTAG_4X4';

/**
 * TopoTag 5x5 dictionary
 *
 *
 *
 * http://purl.org/fidmark/DICT_TOPOTAG_5X5
 */
export const DICT_TOPOTAG_5X5: OtherIndividual = 'http://purl.org/fidmark/DICT_TOPOTAG_5X5';

/**
 * Bottom left origin
 *
 *
 *
 * http://purl.org/fidmark/OriginBottomLeft
 */
export const OriginBottomLeft: OtherIndividual = 'http://purl.org/fidmark/OriginBottomLeft';

/**
 * Bottom right origin
 *
 * Bottom right origin of a square marker.
 *
 * http://purl.org/fidmark/OriginBottomRight
 */
export const OriginBottomRight: OtherIndividual = 'http://purl.org/fidmark/OriginBottomRight';

/**
 * Center origin
 *
 * The center origin is the absolute center of a marker.
 *
 * http://purl.org/fidmark/OriginCenter
 */
export const OriginCenter: OtherIndividual = 'http://purl.org/fidmark/OriginCenter';

/**
 * Top left origin
 *
 *
 *
 * http://purl.org/fidmark/OriginTopLeft
 */
export const OriginTopLeft: OtherIndividual = 'http://purl.org/fidmark/OriginTopLeft';

/**
 * Top right origin
 *
 *
 *
 * http://purl.org/fidmark/OriginTopRight
 */
export const OriginTopRight: OtherIndividual = 'http://purl.org/fidmark/OriginTopRight';

export const _BASE: IriString = 'http://purl.org/fidmark/';
export const _PREFIX: string = 'fidmark';

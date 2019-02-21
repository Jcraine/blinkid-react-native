import { Recognizer, RecognizerResult } from '../recognizer'
import {
    Date, 
    Point, 
    Quadrilateral,
    MrtdDocumentType, 
    MrzResult, 
    EudlCountry, 
    DocumentFaceDetectorType,
    ImageExtensionFactors,
} from '../types'

/**
 * Result object for CzechiaIdBackRecognizer.
 */
export class CzechiaIdBackRecognizerResult extends RecognizerResult {
    constructor(nativeResult) {
        super(nativeResult.resultState);
        
        /** 
         * The Czech ID's issuing authority. 
         */
        this.authority = nativeResult.authority;
        
        /** 
         * Image of the full document 
         */
        this.fullDocumentImage = nativeResult.fullDocumentImage;
        
        /** 
         * The data extracted from Czech ID's machine readable zone. 
         */
        this.mrzResult = nativeResult.mrzResult != null ? new MrzResult(nativeResult.mrzResult) : null;
        
        /** 
         * The Czech ID owner's permanent address. 
         */
        this.permanentStay = nativeResult.permanentStay;
        
        /** 
         * The Czech ID owner's personal number. 
         */
        this.personalNumber = nativeResult.personalNumber;
        
    }
}

/**
 * Recognizer which can scan the back side of Czech IDs.
 */
export class CzechiaIdBackRecognizer extends Recognizer {
    constructor() {
        super('CzechiaIdBackRecognizer');
        
        /** 
         * Defines whether glare detector is enabled. 
         */
        this.detectGlare = true;
        
        /** 
         * Defines if Czech ID's issuing authority should be extracted. 
         */
        this.extractAuthority = true;
        
        /** 
         * Defines if Czech ID owner's permanent address should be extracted. 
         */
        this.extractPermanentStay = true;
        
        /** 
         * Defines if Czech ID owner's personal number should be extracted. 
         */
        this.extractPersonalNumber = true;
        
        /** 
         * The DPI (Dots Per Inch) for full document image that should be returned. 
         */
        this.fullDocumentImageDpi = 250;
        
        /** 
         * The extension factors for full document image. 
         */
        this.fullDocumentImageExtensionFactors = new ImageExtensionFactors();
        
        /** 
         * Defines whether full document image will be available in 
         */
        this.returnFullDocumentImage = false;
        
        this.createResultFromNative = function (nativeResult) { return new CzechiaIdBackRecognizerResult(nativeResult); }
    }
}
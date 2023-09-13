declare module 'jcrop' {
    interface JcropOptions {
      aspectRatio?: number;
      minSize?: [number, number];
      maxSize?: [number, number];
    }
  
    interface JcropApi {
      destroy: () => void;
      setOptions: (options: JcropOptions) => void;
    }
  
    interface JQuery {
      Jcrop: (options?: JcropOptions) => JcropApi;
    }
  }
  
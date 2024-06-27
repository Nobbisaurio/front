export const getBase64ImageFromURL = (url:string):Promise<string>|undefined => {
    return new Promise((resolve, reject) => {
      var img = new Image();
      img.setAttribute("crossOrigin", "anonymous");

      img.onload = () => {
        var canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;

        var ctx = canvas.getContext("2d");
        ctx!.drawImage(img, 0, 0);

        var dataURL = canvas.toDataURL("image/png");

        resolve(dataURL);
      };

      img.onerror = error => {
        reject(error);
      };

      img.src = url;
    });
  }

  export const backgroundImage = async () => {
    try {
      const promiseImg = await getBase64ImageFromURL( './assets/img/docTemplate.png' );
      const img = promiseImg;
      return img;
    } catch ( error ) {
      console.log( error );
      return '';
    }
  };

  export const logoImage = async () => {
    try {
      const promiseImg = await getBase64ImageFromURL( './assets/img/logoYav.png' );
      const img = promiseImg;
      return img;
    } catch ( error ) {
      console.log( error );
      return '';
    }
  };

export function useCloudinary() {

    function openWidget(): Promise<{ img: string, tmb: string }> {
        return new Promise((resolve, reject) => {
            const uploadWidget = window.cloudinary.openUploadWidget({

                cloudName: 'dge1n5ezz',
                uploadPreset: 'ml_default',
                sources: ['local', 'camera', 'url',]
              }, 
              function(error: any, result: any) {
                if (!error && result.event === 'success') {
                  const img = result.info.url;
                  const tmb = result.info.tmb;
                  resolve({ img, tmb })
                }
              }
              )
          
              uploadWidget.open()
        })
        
      }

      return {
        openWidget
      }
}
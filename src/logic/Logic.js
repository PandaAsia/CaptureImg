import domtoimage from "dom-to-image-more"

function ElementLink(dataUrl, form, type) {
  const link = document.createElement("a");
          link.download = `${form.fileName}.${type}`;
          link.href = dataUrl;
          link.click();
}

function CaptureJpg(containerCapture, form) {
  domtoimage.toJpeg(containerCapture).then((dataUrl) => {
    ElementLink(dataUrl, form, "jpg");
        }).catch(err => alert("Nosotros no podemos tomar una foto por el momento" + err));
}

function CaptureWebp(containerCapture, form) {
  domtoimage.toPng(containerCapture).then(dataUrl => {
          const img = new Image();
          img.src = dataUrl;
          img.onload = function () {
            const canvas = document.createElement("canvas");
            canvas.width = img.width;
            canvas.height = img.height;

            const ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0);

            const webpDataUrl = canvas.toDataURL('image/webp');

            ElementLink(webpDataUrl, form, "webp");
            // const link = document.createElement("a");
            // link.href = webpDataUrl;
            // link.download = `${form.fileName}.webp`;
            // link.click();
          }
        }).catch(err => alert("Nosotros no podemos tomar una foto por el momento" + err));
}

function CapturePng(containerCapture, form) {
  domtoimage.toPng(containerCapture).then((dataUrl) => {
    ElementLink(dataUrl, form, "png");
          // const link = document.createElement("a");
          // link.download = `${form.fileName}.png`;
          // link.href = dataUrl;
          // link.click();
        }).catch(err => alert("Nosotros no podemos tomar una foto por el momento" + err));
}

function CaptureSvg(containerCapture, form) {
  domtoimage.toSvg(containerCapture).then(dataUrl => {
    ElementLink(dataUrl, form, "svg");
          // const link = document.createElement("a");
          // link.download = `${form.fileName}.svg`;
          // link.href = dataUrl;
          // link.click();
        }).catch(err => alert("Nosotros no podemos tomar una foto por el momento" + err));
}

export {CaptureJpg, CaptureWebp, CapturePng, CaptureSvg}
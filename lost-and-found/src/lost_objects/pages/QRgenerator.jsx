import QRcode from 'qrcode';
import { useState } from 'react';
import { useLostObjectStore } from '../../hooks';

export const QRgenerator = () => {
  const { getQrs } = useLostObjectStore();
  const [qrs, setQrs] = useState(0);
  const [qrImages, setQrImages] = useState([]);

  const onValueChange = ({target}) => {
    setQrs(target.value);
  };

  const onGenerate = async () => {
    try {
      const data = await getQrs(qrs);

      const generatedQrs = await Promise.all(
        data.map(async (qrGenerated) => {
          const qr = await QRcode.toString(qrGenerated.qrValue, { type: 'svg', width: 150 });
          return { id: qrGenerated.id, qr };
        })
      );

      setQrImages(generatedQrs);
    } catch (error) {
      console.error('Error generando los QR', error);
    }
  };

  const downloadSVG = () => {
    const qrHeight = 150; 
    const qrWidth = 150; 
    const cols = 5; 
    const rows = Math.ceil(qrImages.length / cols); 

    const svgContent = qrImages.map(({ qr }, index) => {
      const x = (index % cols) * qrWidth; 
      const y = Math.floor(index / cols) * qrHeight; 

      return `
        <g transform="translate(${x}, ${y})">
          ${qr} <!-- Sólo la imagen del QR -->
        </g>
      `;
    }).join('');

    const svgFile = `
      <svg xmlns="http://www.w3.org/2000/svg" width="${qrWidth * cols}" height="${qrHeight * rows}" viewBox="0 0 ${qrWidth * cols} ${qrHeight * rows}">
        <foreignObject width="100%" height="100%">
          <div xmlns="http://www.w3.org/1999/xhtml" style="font-family: Arial, sans-serif; color: black;">
            ${svgContent}
          </div>
        </foreignObject>
      </svg>
    `;

    const blob = new Blob([svgFile], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'qrs-generados.svg';
    a.click();
  };

  return (
    <div className="container h-100 d-flex flex-column">
      <div className="row p-4">
        <div className="col">
          <div className="card">
            <div className="card-body">
              <p className="text-info-custom">Por favor digite la cantidad de QR que necesites generar:</p>

              <div className="input-wrapper d-flex align-items-center">
                <img className="icons" src="/assets/icons/icon_qr.png" alt="" />

                <input
                  type="number"
                  className="hbox"
                  placeholder="Cantidad de códigos QR"
                  onChange={onValueChange}
                  value={qrs}
                />
                <i className="bi bi-qr-code-scan"></i>
              </div>

              <button className="btn btn-primary mt-3" onClick={onGenerate}>
                Generar
              </button>

              <div className="mt-4" style={{ maxHeight: '400px', overflowY: 'auto' }}>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
                    gap: '20px',
                  }}
                >
                  {qrImages.map(({ qr }, index) => (
                    <div
                      key={index}
                      style={{
                        textAlign: 'center',
                        padding: '10px',
                        border: '1px solid #eee',
                        borderRadius: '8px',
                        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                      }}
                    >
                      <div dangerouslySetInnerHTML={{ __html: qr }} />
                    </div>
                  ))}
                </div>
              </div>

            {qrImages.length > 0  && <button className="btn btn-primary mt-3" onClick={downloadSVG}>
                Descargar archivo SVG
              </button>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

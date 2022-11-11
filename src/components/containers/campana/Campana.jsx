import "./Campana.scss";

export function Campana ({imgBanner1, imgBanner2, campanaProducts, nameCampana, children}){
  return (
    <section className="campana">
      <div className="banners">
        <img className="banners__banner1" src={require("../../../img/publicity/"+imgBanner1)} alt={nameCampana} key={nameCampana+1} />
        <img className="banners__banner2" src={require("../../../img/publicity/"+imgBanner2)} alt={nameCampana} key={nameCampana+2} />
      </div>
      <div className="campana__carrusel">
        {children}
      </div>
    </section>
  )
}

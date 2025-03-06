import '../styles/group.css';
import { languages } from "../languages/languages";

const Group = ({language}) => {


    return(
        <div id="groups">
          <br/><br/>
          <h3 className="group-title">{languages[language].Our_Groups}</h3>

          <br/><br/>
          <div className="group-container">

          {[
            {title:language === "English" ?  "Qeshd" : "قشد",description: language === "English" ?  "Qashd Store specializes in providing popular foods from different regions of the Kingdom, with new dishes to distinguish us and satisfy the taste of our customers." : "يختص متجر قشد بتقديم المأكولات الشعبية من مختلف مناطق المملكة بأطباق جديدة لتميزنا وترضي أذواق عملائنا.",websitelink:"https://qeshd.com/" }
            ,{
              title: language === "English" ? "Areekat Alshef" : "عريقات الشيف",description: language === "English" ?  "Areekat Alshef is a traditional Saudi restaurant and a specialty store dedicated to reviving authentic Saudi heritage products." : "عريكة الشيف هو مطعم سعودي تقليدي ومتجر متخصص مخصص لإحياء المنتجات التراثية السعودية الأصيلة."
            }].map((item,index)=>{
            return(
              <div key={index} className="group-subContainer">
                <h4 className="groupitem-title">{item.title}</h4>
                <p className="groupitem-description">{item.description}</p>
               { item.websitelink && <button className="groupitem-button" onClick={()=>window.open(item.websitelink,"_blank")}>{languages[language].VisitWebsite}</button> }
                </div>
            )
          })}

          </div>
        </div>
    )
}

export default Group
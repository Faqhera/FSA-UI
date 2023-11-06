import styles from "./Lang.module.css"
const Lang = ({ln}) => {
    //const cssStyle = {
        //color:"black",
       // paddingTop: "8px",
      //  backgroundColor: "pink",
    //};
    //<p style = {cssStyle} className="bg-blue-700 p-3 m-3 border-2 border-red-600">
    //return ( <p style={{fontSize: "25px"}} className="bg-blue-700 p-3 m-3 border-2 border-red-600">{ln}</p> );
   
    return <p className={styles.p}>{ln}</p>

};


export default Lang;
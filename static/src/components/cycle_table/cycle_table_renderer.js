/** @odoo-module */


import { loadJS } from "@web/core/assets"
const { Component, onWillStart, useRef, onMounted } = owl

export class CycleTable extends Component {
    setup(){
        this.chartRef = useRef("chart")
        onWillStart(async ()=>{
            await loadJS("https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.0/chart.umd.min.js")
        })

        onMounted(()=>this.renderTable())
    }
    floatToTime(floatValue) {
      // Extrair a parte inteira e decimal do valor float
      let hours = Math.floor(floatValue);
      let minutes = Math.round((floatValue - hours) * 60);
  
      // Formatar o tempo para HH:mm
      let hoursString = hours.toString().padStart(2, '0');
      let minutesString = minutes.toString().padStart(2, '0');
  
      return hoursString + ':' + minutesString;
    }
   
    renderTable(){
       
      
    }
}

CycleTable.template = "steril_supervisorio_dashboard.CycleTableRenderer"

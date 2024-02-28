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

    renderTable(){
       
      
    }
}

CycleTable.template = "steril_supervisorio_dashboard.CycleTableRenderer"

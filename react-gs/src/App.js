import React, {Component} from 'react';
import './App.css';
import {AgGridReact} from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

import NameFieldComponent from "./NameFieldComponent"


const teste = params => {
  return(
    <button>teste</button>
  );
};

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      modelVisibility:true,
      columnDefs: [
        {
          headerName: 'SELECT',
         // field: 'empresa',
          width: 110,
          sortable: true,
          resizable: true,
          filter: 'agNumberColumnFilter',
          //checkboxSelection: true,
          cellRendererFramework:teste
      },
        {
          headerName: 'EMPRESA',
          field: 'empresa',
          width: 110,
          sortable: true,
          resizable: true,
          filter: 'agNumberColumnFilter',
          cellRenderer: "nameFieldComponent"
          
      }, 
      {
          headerName: 'TIPO_ITEM',
          field: 'tipo_item',
          width: 100,
          sortable: true,
          resizable: true,
          filter: 'agNumberColumnFilter',
      },
      {
        headerName: 'TIPO + DESCRICAO',
        //field: 'tipo_item',
        width: 100,
        sortable: true,
        resizable: true,
        filter: 'agNumberColumnFilter',
        valueGetter:({data }) => `${data.cod_item}  |  ${data.descr_item} | `///valueGetter trabalha apenas com string e number
      },
       {
        headerName: 'maisDados',
        //field: 'tipo_item',
        width: 100,
        sortable: true,
        resizable: true,
        filter: 'agNumberColumnFilter',
        cellRenderer: "maisDados"
      }, 
    /*   {
        headerName: 'Avatar',
        //field: 'tipo_item',
        width: 100,
        sortable: true,
        resizable: true,
        filter: 'agNumberColumnFilter',
        cellRenderer:({ value }) => `<img style="height`    /// cellRenderer trabalha com imagem em html 
      }, */
      {
        headerName: 'classComponent',
        //field: 'tipo_item',
        width: 100,
        sortable: true,
        resizable: true,
        filter: 'agNumberColumnFilter',
        cellRenderer: "nameFieldComponent"
      },

      {
          headerName: 'COD_ITEM',
          field: 'cod_item',
          width: 100,
          sortable: true,
          resizable: true,
          filter: 'agNumberColumnFilter',
      },
      {
          headerName: 'DESCR_ITEM',
          field: 'descr_item',
          width: 350,
          sortable: true,
          resizable: true,
          filter: 'agNumberColumnFilter',
      },
      {
          headerName: 'COD_BARRA',
          field: 'cod_barra',
          width: 110,
          sortable: true,
          resizable: true,
          filter: 'agNumberColumnFilter',
      },
      {
          headerName: 'COD_ANT_ITEM',
          field: 'cod_ant_item',
          width: 120,
          sortable: true,
          resizable: true,
          filter: 'agNumberColumnFilter',
      },
      {
          headerName: 'UNID_INV',
          field: 'unid_inv',
          width: 100,
          sortable: true,
          resizable: true,
          filter: 'agNumberColumnFilter',
      },
      {
          headerName: 'COD_NCM',
          field: 'cod_ncm',
          width: 100,
          sortable: true,
          resizable: true,
          filter: 'agNumberColumnFilter',
      },
      {
          headerName: 'EX_IPI',
          field: 'ex_ipi',
          width: 75,
          sortable: true,
          resizable: true,
          filter: 'agNumberColumnFilter',
      },
      {
          headerName: 'COD_GEN',
          field: 'cod_gen',
          width: 90,
          sortable: true,
          resizable: true,
          filter: 'agNumberColumnFilter',
      },
      {
          headerName: 'COD_LST',
          field: 'cod_lst',
          width: 85,
          sortable: true,
          resizable: true,
          filter: 'agNumberColumnFilter',
      },
      {
          headerName: 'ALIQ_ICMS',
          field: 'aliq_icms',
          width: 100,
          sortable: true,
          resizable: true,
          filter: 'agNumberColumnFilter',
      },
      {
          headerName: 'CEST',
          field: 'cest',
          width: 75,
          sortable: true,
          resizable: true,
          filter: 'agNumberColumnFilter',
      },
      {
          headerName: 'NCMS',
          field: 'ncms',
          width: 75,
          sortable: true,
          resizable: true,
          filter: 'agNumberColumnFilter',
      },
      {
          headerName: 'QTDVEZES',
          field: 'qtdvezes',
          width: 100,
          sortable: true,
          resizable: true,
          filter: 'agNumberColumnFilter',
      },
      {
          headerName: 'TIPO_ITEM_NOVO',
          field: 'tipo_item_novo',
          width: 150,
          sortable: true,
          resizable: true,
          filter: 'agNumberColumnFilter',
      },
      {
          headerName: 'RESSARCIMENTOST',
          field: 'ressarcimentost',
          width: 150,
          sortable: true,
          resizable: true,
          filter: 'agNumberColumnFilter',
      },
      {
          headerName: 'ALIQ_ICMS_INTERNA',
          field: 'aliq_icms_interna',
          width: 150,
          sortable: true,
          resizable: true,
          filter: 'agNumberColumnFilter',
      },
      {
          headerName: 'ANO',
          field: 'ano',
          width: 75,
          sortable: true,
          resizable: true,
          filter: 'agNumberColumnFilter',
      },
      {
          headerName: 'MES',
          field: 'mes',
          width: 75,
          sortable: true,
          resizable: true,
          filter: 'agNumberColumnFilter',
      },
      ],
      rowData: [{
        "empresa": "46138319000189",
        "cod_item": "15-99-6519",
        "descr_item": "FUSIVEL AR ULTRA-RAPIDO 900A - T3 - REF: FNH3-900K-A - WEG",
        "unid_inv": "PC",
        "tipo_item": "00",
        "cod_ncm": "85361000",
        "cod_gen": "85",
        "aliq_icms": 18,
        "ncms": "85361000;",
        "qtdvezes": 1,
        "tipo_item_novo": null,
        "ressarcimentost": null,
        "aliq_icms_interna": null,
        "ano": null,
        "mes": null
    },
    {
        "empresa": "46138319000189",
        "cod_item": "25-99-1072",
        "descr_item": "INVERSOR FREQUENCIA CFW11 0477 T4 - 477A - 380~480V WEG",
        "unid_inv": "PC",
        "tipo_item": "00",
        "cod_ncm": "90328911",
        "cod_gen": "90",
        "aliq_icms": 18,
        "ncms": "90328911;",
        "qtdvezes": 1,
        "tipo_item_novo": null,
        "ressarcimentost": null,
        "aliq_icms_interna": null,
        "ano": null,
        "mes": null
    },
    {
        "empresa": "46138319000189",
        "cod_item": "4WP/M3.0022",
        "descr_item": "MIT 4WP     3.00HP 220V     MON 3000N",
        "unid_inv": "UN",
        "tipo_item": "00",
        "cod_ncm": "85014019",
        "cod_gen": "85",
        "aliq_icms": 18,
        "ncms": "85014019;",
        "qtdvezes": 17,
        "tipo_item_novo": null,
        "ressarcimentost": null,
        "aliq_icms_interna": null,
        "ano": null,
        "mes": null
    },
    {
        "empresa": "46138319000189",
        "cod_item": "B4BPS13I22",
        "descr_item": "B 4BPS13I-22 (ST-55)",
        "unid_inv": "UN",
        "tipo_item": "00",
        "cod_ncm": "84137010",
        "cod_gen": "84",
        "aliq_icms": 18,
        "ncms": "84137010;",
        "qtdvezes": 15,
        "tipo_item_novo": null,
        "ressarcimentost": null,
        "aliq_icms_interna": null,
        "ano": null,
        "mes": null
    },
    {
        "empresa": "46138319000189",
        "cod_item": "B4BPS1I20",
        "descr_item": "B 4BPS1I-20 (ST-05)",
        "unid_inv": "UN",
        "tipo_item": "00",
        "cod_ncm": "84137010",
        "cod_gen": "84",
        "aliq_icms": 18,
        "ncms": "84137010;",
        "qtdvezes": 17,
        "tipo_item_novo": null,
        "ressarcimentost": null,
        "aliq_icms_interna": null,
        "ano": null,
        "mes": null
    },
    {
        "empresa": "46138319000189",
        "cod_item": "B4BPS9I14",
        "descr_item": "B 4BPS9I-14 (ST-35)",
        "unid_inv": "UN",
        "tipo_item": "00",
        "cod_ncm": "84137010",
        "cod_gen": "84",
        "aliq_icms": 18,
        "ncms": "84137010;",
        "qtdvezes": 23,
        "tipo_item_novo": null,
        "ressarcimentost": null,
        "aliq_icms_interna": null,
        "ano": null,
        "mes": null
    },
    {
        "empresa": "46138319000189",
        "cod_item": "MRN02-IB5X4",
        "descr_item": "BUCHA REDUCAO EM ACO INOX AISI 304 ROSCA BSP 5\"X4\"",
        "unid_inv": "PC",
        "tipo_item": "00",
        "cod_ncm": "73079200",
        "cod_gen": "73",
        "aliq_icms": 18,
        "ncms": "73079200;",
        "qtdvezes": 2,
        "tipo_item_novo": null,
        "ressarcimentost": null,
        "aliq_icms_interna": null,
        "ano": null,
        "mes": null
    },
    {
        "empresa": "46138319000189",
        "cod_item": "OP4/M0.5022",
        "descr_item": "MIT OP4     0.50HP 220V     MON",
        "unid_inv": "UN",
        "tipo_item": "00",
        "cod_ncm": "85014019",
        "cod_gen": "85",
        "aliq_icms": 18,
        "ncms": "85014019;",
        "qtdvezes": 23,
        "tipo_item_novo": null,
        "ressarcimentost": null,
        "aliq_icms_interna": null,
        "ano": null,
        "mes": null
    },
    {
        "empresa": "46138319000189",
        "cod_item": "OP4/M0.5022E",
        "descr_item": "MIT OP4     0.50HP 220V     MON 2 FIOS 1500N",
        "unid_inv": "UN",
        "tipo_item": "00",
        "cod_ncm": "85014019",
        "cod_gen": "85",
        "aliq_icms": 18,
        "ncms": "85014019;",
        "qtdvezes": 24,
        "tipo_item_novo": null,
        "ressarcimentost": null,
        "aliq_icms_interna": null,
        "ano": null,
        "mes": null
    },
    {
        "empresa": "46138319000189",
        "cod_item": "OP4/M1.0022",
        "descr_item": "MIT OP4     1.00HP 220V     MON",
        "unid_inv": "UN",
        "tipo_item": "00",
        "cod_ncm": "85014019",
        "cod_gen": "85",
        "aliq_icms": 18,
        "ncms": "85014019;",
        "qtdvezes": 22,
        "tipo_item_novo": null,
        "ressarcimentost": null,
        "aliq_icms_interna": null,
        "ano": null,
        "mes": null
    },
    {
        "empresa": "46138319000189",
        "cod_item": "OP4/M1.50254",
        "descr_item": "MIT OP4     1.50HP 254V     MON",
        "unid_inv": "UN",
        "tipo_item": "00",
        "cod_ncm": "85014019",
        "cod_gen": "85",
        "aliq_icms": 18,
        "ncms": "85014019;",
        "qtdvezes": 16,
        "tipo_item_novo": null,
        "ressarcimentost": null,
        "aliq_icms_interna": null,
        "ano": null,
        "mes": null
    },
    {
        "empresa": "46138319000189",
        "cod_item": "OP4/M2.0022",
        "descr_item": "MIT OP4     2.00HP 220V     MON",
        "unid_inv": "UN",
        "tipo_item": "00",
        "cod_ncm": "85014019",
        "cod_gen": "85",
        "aliq_icms": 18,
        "ncms": "85014019;",
        "qtdvezes": 22,
        "tipo_item_novo": null,
        "ressarcimentost": null,
        "aliq_icms_interna": null,
        "ano": null,
        "mes": null
    },
    {
        "empresa": "46138319000189",
        "cod_item": "OP4/M3.0022",
        "descr_item": "MIT OP4     3.00HP 220V     MON 1500N",
        "unid_inv": "UN",
        "tipo_item": "00",
        "cod_ncm": "85014019",
        "cod_gen": "85",
        "aliq_icms": 18,
        "ncms": "85014019;",
        "qtdvezes": 24,
        "tipo_item_novo": null,
        "ressarcimentost": null,
        "aliq_icms_interna": null,
        "ano": null,
        "mes": null
    },
    {
        "empresa": "46138319000189",
        "cod_item": "OP4/T1.0022",
        "descr_item": "MIT OP4     1.00HP 220V",
        "unid_inv": "UN",
        "tipo_item": "00",
        "cod_ncm": "85015110",
        "cod_gen": "85",
        "aliq_icms": 18,
        "ncms": "85015110;",
        "qtdvezes": 19,
        "tipo_item_novo": null,
        "ressarcimentost": null,
        "aliq_icms_interna": null,
        "ano": null,
        "mes": null
    },],

      frameworkComponents: {
        nameFieldComponent: NameFieldComponent
      },

      maisdados:[
        {
          "id": "2",
          "descricao": "exemplo02"
        },
        {
          "id": "3",
          "descricao": "exemplo03"
        },{
          "id": "4",
          "descricao": "exemplo04"
        }
      ]
    };
  }
 

  /* componentDidMount() {  //renderizar api e deixar os valores em state
    fetch('https://raw.githubusercontent.com/ag-grid/ag-grid/master/grid-packages/
    ag-grid-docs/src/sample-data/smallRowData.json')
      .then(result => result.json())
      .then(rowData => this.setState({ rowData }));
  } */
  

componentDidUpdate(){
  this.columnApi.setColumnVisible('cod_item', this.state.modelVisibility);
  this.columnApi.setColumnVisible('empresa', this.state.modelVisibility);
}
onGridReady = params => {
  this.gridApi = params.api;
  this.columnApi = params.columnApi;
}

toggleModelColumn =() => {
  this.setState({modelVisibility:!this.state.modelVisibility})
}

onButtonClick = () => {
  
  const selectedNos = this.gridApi.getSelectedNodes();
  console.log("grid", selectedNos)
  const selectedData = selectedNos.map(node=> node.data);
  console.log("teste", this.gridApi);
  const selectedDataString = selectedData
  .map(node => `\n Empresa: ${node.empresa} \n\n Código do item: ${node.cod_item}\n\n Descrição: ${node.descr_item}`)
  .join(', ');
  alert(` selected nodes: ${selectedDataString}`)
}

  render(){
    
    return(
      <div
      className='ag-theme-balham'
      style={{
        height: '500px',
        width: '600px'
      }}
      >
        <button type="button" 
          onClick={this.onButtonClick}>
          Pegar as linhas Selecionadas
        </button>

        <button type="button" 
          onClick={this.toggleModelColumn}>
          Alternar modelo de coluna
        </button>

        <AgGridReact
          onGridReady={this.onGridReady}
          //onGridReady={params => (this.gridApi = params.api)}//criando api da linha selecionada // foi desativado para fazer o toggle
          rowSelection= "simple" //tipos de seleções de linha "simple" é default - "multiple"
          columnDefs={this.state.columnDefs}
          rowData={this.state.rowData}
          maisDados={this.state.maisDadod}
          frameworkComponents={this.state.frameworkComponents}
        >

        </AgGridReact>


      </div>
    )
  }
}

export default App;

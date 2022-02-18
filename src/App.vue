<template>
  <b-container>
    <div class="page-header">
      <h2 class="text-center">Game Manager</h2>
      <hr>
    </div>
    <b-row>
       <b-col lg="4">
         <b-form v-on:submit.prevent="onSubmit()">
        <b-form-group label="Titolo" label-for="titolo">
        <b-form-input
          name="titolo"
          id="titolo"
          v-model="newGame.Titolo"
          type="text"
          v-on:change="onChange()"
        >
        </b-form-input>
      </b-form-group>

      <b-form-group  label="SoftwareHouse" label-for="softwarehouse">
        <b-form-input
          name="softwarehouse"
          id="softwarehouse"
          v-model="newGame.SoftwareHouse"
          type="text"
         v-on:change="onChange()"
        ></b-form-input>
      </b-form-group>

      <b-form-group label="Tipo" label-for="tipo">
        <b-form-select
          name="tipo"
          id="tipo"
          v-model="newGame.Tipo"
          :options="gameTypes"
          
        ></b-form-select>
      </b-form-group>

      <b-form-group label="Piattaforma" label-for="piattaforma">
        <b-form-select
         name="piattaforma"
          id="piattaforma"
          v-model="newGame.Piattaforma"
          :options="gamePlatforms"
        ></b-form-select>
      </b-form-group>
    <b-btn type="submit" variant="primary" :disabled="submitIsDisabled">Aggiungi </b-btn>
        </b-form>
    <br />
       </b-col>

      <b-col lg="8">
        <div class="table-responsive-md">
        <b-table striped hover :items="game" :fields="fields">
          <template con v-slot:cell(Tipo)="data">{{getGameType(data.item.Tipo)}}</template>
    <!-- <template con v-slot:cell(Piattaforma)="data">{{getPiattaforma(data.item.Piattaforma)}}</template> -->
          <template con v-slot:cell(Piattaforma)="data">
            <img :src="getPlatformImage(data.item.Piattaforma)" width="32">
          </template>

          <template v-slot:cell(Operazioni)="data" >
            <b-btn v-bind:style="{ 'margin-right':'20px' }" size="sm" variant ="warning" @click="onDelete(data.item)">X</b-btn>
            <b-btn size="sm" variant ="secondary" @click="onEdit(data.item)" v-b-modal.editGameModal>M</b-btn>
          </template>
        </b-table>
        </div>
      </b-col>
    </b-row>
    <b-modal id="editGameModal" title="Modifica Game" @ok="onUpdate()">
      <b-form-group label="Titolo" label-for="titolo" >
        <b-form-input type="text" id="titolo" name="titolo" v-model="editGame.Titolo"></b-form-input>
      </b-form-group>
      <b-form-group label="SoftwareHouse" label-for="softwarehouse" >
        <b-form-input type="text" id="softwarehouse" name="softwarehouse" v-model="editGame.SoftwareHouse"></b-form-input>
      </b-form-group>

      <b-form-group label="Tipo" label-for="tipo">
        <b-form-select
          name="tipo"
          id="tipo"
          v-model="editGame.Tipo"
          :options="gameTypes"
          
        ></b-form-select>
        </b-form-group>
       <b-form-group label="Piattaforma" label-for="piattaforma">
        <b-form-select
         name="piattaforma"
          id="piattaforma"
          v-model="editGame.Piattaforma"
          :options="gamePlatforms"
        ></b-form-select>
        </b-form-group>
    </b-modal>
  </b-container>

</template>

<script>
import { gamesRef } from "./utils/firebase";
import { GameTypeEnum, PiattaformaEnum } from "./models/game";

export default {
firebase:{
  game:gamesRef.orderByChild('Titolo')
},
  data() {
    return {
      gameTypes: GameTypeEnum.properties,
      gamePlatforms: PiattaformaEnum.properties,
      game: [],
      fields: ['Titolo', 'SoftwareHouse', 'Tipo', 'Piattaforma', 'Operazioni'],
      newGame:{
          Titolo:'',
          SoftwareHouse:'',
          Tipo:GameTypeEnum.FPS,
          Piattaforma:PiattaformaEnum.PC,

      },
      editGame:{},
      originKey:"",
      submitIsDisabled:true,
    }
  },
  
  methods: {
    getPiattaforma(value) {
      return this.gamePlatforms[value].text;
    },
    getGameType(value) {
      return this.gameTypes[value].text;
    },
    onSubmit(){
        gamesRef.push(this.newGame);
        this.newGame.Titolo="";
        this.newGame.SoftwareHouse="",
        this.submitIsDisabled= true
    },
    onChange(){
        this.submitIsDisabled= this.newGame.Titolo === '' || this.newGame.SoftwareHouse === ""
    },
    onDelete(game){
      gamesRef.child(game['.key']).remove();
    },
    onEdit(game){
      this.originKey=game['.key'];
      this.editGame={
        Titolo: game.Titolo,
        SoftwareHouse: game.SoftwareHouse,
        Tipo: game.Tipo,
        Piattaforma: game.Piattaforma,
      };
    },
    onUpdate(){
      gamesRef.child(this.originKey).update(this.editGame)
    },
    getPlatformImage(value){
      return require('./assets/P_' + value + '.jpg');
    }
  }


}


</script>

  <style lang="scss">
  .page-header {
    background-color: #226622;
    color: #ffffff;
  }

  @media screen  and (max-width:768px) {
   .page-header {
     margin-top:15px;
   }
  }
  .page-header h2 {
    padding-top: 8px;
  }

</style>

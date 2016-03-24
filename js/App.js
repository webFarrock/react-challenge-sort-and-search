import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import ToolBar from './components/ToolBar';
import User from './components/User';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        usersData: [{"id":0,"name":"Peter Richardson","age":37,"phone":"(832) 273-5572","image":"cat","phrase":"Ge haskunum fespip ne vat as sufeoj untulcu ba zurta ejcidula zi hum pov diska."},{"id":1,"name":"Elmer May","age":45,"phone":"(742) 331-7364","image":"cat","phrase":"Zad gabwewhi kowvapdih wale bevute sa ogwisgot tas mumik butde efaho fajez vojovam kuf orunapo."},{"id":2,"name":"Verna Santos","age":43,"phone":"(510) 776-1090","image":"pig","phrase":"Lul pucohu lezeve be cabmace helji cag ajioto heupcac ubjipe pupewe habver hafle ihpe munpu."},{"id":3,"name":"Lou Wolfe","age":37,"phone":"(649) 703-1503","image":"lion","phrase":"Eh ko unco kuvtujo lep dih sukoc taocod oc notboino muve ki agimej tavmup evbawki."},{"id":4,"name":"Wayne Joseph","age":45,"phone":"(962) 536-9686","image":"fox","phrase":"Win ijaj setse nozup cagha gir lepuja kiud ri kareg lozpehile it sozokafi deb jivir."},{"id":5,"name":"Chris Leonard","age":27,"phone":"(902) 765-3813","image":"lion","phrase":"Leva gen vefig ufa ziugti gur garlom itisuf rafkuhso dit mag reha ragita wuhze du."},{"id":6,"name":"Mason Peterson","age":25,"phone":"(386) 699-7138","image":"sheep","phrase":"Li les lov unuta igotarwo re jeevuvi cu ha zaapo ahepicjen ribumif jewfocu udrujoh wa."},{"id":7,"name":"Stanley Fisher","age":28,"phone":"(906) 871-4319","image":"owl","phrase":"Igfugket se kavgof pikguap rogekre evutipo rithuj hig zih ek mip hozbew purapi torube ejiworme."},{"id":8,"name":"Craig Pittman","age":55,"phone":"(761) 652-8979","image":"owl","phrase":"Furejlaf ut won he wa wilkovew dosziz jigep dipjiwjog tuzus ihosus gi booga otu kogiz."},{"id":9,"name":"Lelia Holt","age":46,"phone":"(768) 725-2278","image":"raccoon","phrase":"Pevuba roluhesu zuv kisis isnep gieder bodsuf gankeh ziztiwgu fo alociwas ludetu feseb banuvij wepisuge."},{"id":10,"name":"Kevin Daniel","age":63,"phone":"(219) 836-6419","image":"cat","phrase":"Nozena fil etizidahu povejulu rumfas inwectu umafi lemoficu tevwen api kogaco duf ci uhede ohometih."},{"id":11,"name":"Keith Coleman","age":42,"phone":"(748) 803-3622","image":"lion","phrase":"Vake ni badiaz hal sigjal ajtiz vultepca rezot lufibas imugamu ne orajergos fufuh muptob ecefec."},{"id":12,"name":"Jeremiah Chapman","age":48,"phone":"(821) 390-3337","image":"penguin","phrase":"Go neod ic wahwu ejaf dumo igzah nur jauzadi akwuz ag abokuh dag pioc peoga."},{"id":13,"name":"Jay Delgado","age":30,"phone":"(676) 240-9645","image":"owl","phrase":"Luhdec suhfan kazos hajfod fiturumo husuto abwinas wieguho goliz ze zev ferzughat kas opazimo tiwaav."},{"id":14,"name":"Loretta Powell","age":42,"phone":"(803) 481-6514","image":"owl","phrase":"Sat ra detujna mogga vowa vesuppe gahaif ede kaj sok ukuazicu vib ligor zo oza."}]
    };
  }


  render() {
    return (
      <div className="container-fluid app">
        <SearchBar />
        <ToolBar />
        <User usersData={this.state.usersData}/>
      </div>
    );
  }
}

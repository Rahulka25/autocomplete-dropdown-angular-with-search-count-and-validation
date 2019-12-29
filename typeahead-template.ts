import {Component} from '@angular/core';
import {Observable} from 'rxjs';
import {debounceTime, map} from 'rxjs/operators';

const statesWithFlags: {name: string, flag?: boolean,tip?: boolean}[] = [
  {'name': 'Alabama', 'flag': false},
  {'name': 'Alaska', 'flag': false},
  {'name': 'Arizona', 'flag': false},
  {'name': 'Arkansas', 'flag': false},
  {'name': 'California', 'flag':false},
  {'name': 'Colorado', 'flag': false},
  {'name': 'Connecticut', 'flag': false},
  {'name': 'Delaware', 'flag': false},
  {'name': 'Florida', 'flag': false},
  {'name': 'Georgia','flag': false
  },
  {'name': 'Hawaii', 'flag': false},
  {'name': 'Idaho', 'flag': false},
  {'name': 'Illinois', 'flag': false},
  {'name': 'Indiana', 'flag': false},
  {'name': 'Iowa', 'flag': false},
  {'name': 'Kansas', 'flag': false},
  {'name': 'Kentucky', 'flag': false},
  {'name': 'Louisiana', 'flag': false},
  {'name': 'Maine', 'flag': false},
  {'name': 'Maryland', 'flag':false},
  {'name': 'Massachusetts', 'flag': false},
  {'name': 'Michigan', 'flag':false},
  {'name': 'Minnesota', 'flag': false},
  {'name': 'Mississippi', 'flag': false},
  {'name': 'Missouri', 'flag': false},
  {'name': 'Montana', 'flag': false},
  {'name': 'Nebraska', 'flag': false},
];

@Component({
  selector: 'ngbd-typeahead-template',
  templateUrl: './typeahead-template.html',
  styles: [`.form-control { width: 300px; }`]
})
export class NgbdTypeaheadTemplate {
  public model: any;
  public isToolTipActive: boolean;

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      map(term => term.length <= 0 ? []
        : this.filter(term))
    )

  formatter = (x: {name: string}) => x.name;

  onBlur(search) {
    /*statesWithFlags.forEach(data => {
      if (search.toLowerCase() === data.name.toLowerCase()) {
        this.model = data;
      }
    })*/
    console.log(search);
  }

  selectedItem(item){
    console.log(item.item.name);
  }

  private filter(term:any) {
    this.isToolTipActive = false;
      if (statesWithFlags.filter(v => v.name.toLowerCase().indexOf(term.toLowerCase()) > -1).length >4) {
        this.isToolTipActive = true;
        
        let sateList = statesWithFlags.filter(v => v.name.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 4);
        sateList.push({'name': '4 out of 50', 'flag': true});
        sateList.push({'name': 'type more for filtering', 'flag': true,'tip':true});
        return sateList;
      } else {
        let sateList = statesWithFlags.filter(v => v.name.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 4);
        sateList.push({'name': '4 out of 50', 'flag': false});
        
        return sateList;
      }
    }


}

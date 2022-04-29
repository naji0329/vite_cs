import navs from './components/nav.json'
import page from './components/page.json'
import tabs from './components/tabs.json'
import expression from './components/expression.json'
import createBtn from './components/createBtn.json'
import editBtn from './components/editBtn.json'
import unitBtn from './components/unitBtn.json'
import detectBtn from './components/detectBtn.json'
import subBtn from './components/subBtn.json'
import addUnitBtn from './components/addUnitBtn.json'
import configUnitBtn from './components/configUnitBtn.json'

unitBtn.dialog.body.bulkActions.splice(1, 0, configUnitBtn);
unitBtn.dialog.body.headerToolbar.unshift(configUnitBtn);

(function () {
  let amis = amisRequire('amis/embed')
  
  // 通过替换下面这个配置来生成不同页面
  let amisJSON = {
    "title": '带边栏联动',
    "initApi": "",
    "aside": navs,
    "toolbar": [
      {
        type: 'button',
        actionType: 'reload',
        label: 'Reload Nav',
        primary: true,
        target: 'nav',
      },
    ],
    "body": ""
  };
  var url_string = window.location.href; 
    var url = new URL(url_string);
    var paramValue = url.searchParams.get("id");
    if(paramValue == 1 ) {
      page.headerToolbar.splice(1,0,createBtn);
      page.bulkActions.unshift(editBtn, unitBtn, detectBtn, subBtn);
      expression.items[1].label="检测协议"
      tabs.tabs.map((data) => {
        data.body = page
      });      
      amisJSON.body = [expression, tabs]
    } else if (paramValue == 2) {
      expression.items[1].label="我的审批"
      const tab1 = tabs;
      tab1.tabs.splice(1, 0, tabs.tabs[3], tabs.tabs[4]);
      tab1.tabs = tab1.tabs.slice(0,3);
      tab1.tabs.map((data) => {
        data.body = page
      });   
      amisJSON.body = [expression, tab1]
    } else {
      const tab2 = tabs;
      tab2.tabs = tabs.tabs.slice(2,5);
      tab2.tabs.map((data) => {
        data.body = page
      });   
      expression.items[1].label="全部审批"
      amisJSON.body = [expression, tab2]    
    }
  amis.embed('#root', amisJSON, {}, { theme: 'antd' })
})();


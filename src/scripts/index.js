import '../styles/index.css';
import $ from 'jquery';
import shoppingList from './shopping-list';


const main = function () {
  shoppingList.bindEventListeners();
  shoppingList.render();
};

$(main);

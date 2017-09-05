angular.module('myApp').service('service', function(){
    
    this.quotes = quotes;
    
    
    this.addQuote = function(obj){
        if (obj.text && obj.author){
            this.quotes.unshift(obj);
        }
    };
    this.removeData = function(textToRemove){
        for (var i=0;i<quotes.length;i++){
          if (quotes[i].text.toLowerCase() === textToRemove.toLowerCase()){
            quotes.splice(i--,1);
          }
        }
      };

  

    });
    
  var quotes = [
        { text: 'Life isn\'t about getting and having, it\'s about giving and being.', author: 'Kevin Kruse'},
        { text: 'Whatever the mind of man can conceive and believe, it can achieve', author: 'Napoleon Hill'},
        { text: 'Strive not to be a success, but rather to be of value.', author: 'Albert Einstein'},
        { text: 'i got big balls like baseballs', author: 'lil scrappy'},
        { text: 'imagine', author: 'John Lennon'},
        
      ];
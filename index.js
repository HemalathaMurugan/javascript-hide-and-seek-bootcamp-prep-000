
   function getFirstSelector(sel) {
     const first = document.querySelector(`${sel}`);
     return first;
   }
   function nestedTarget() {
        return document.querySelector('#nested .target');
    }

    function  deepestChild(){       
      var child =document.querySelectorAll('#grand-node div div div div');
      var mostDeep = child[child.length- 1];
      return mostDeep;
    }

   function increaseRankBy(n) {
        var ranks = document.querySelectorAll('ul.ranked-list li');
        for (var i = 0; i < ranks.length; i++) {
          ranks[i].innerHTML = parseInt(ranks[i].innerHTML) + n
          }
    }
         
    

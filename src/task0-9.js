function getCount(str) {
    let vowelList = 'AEIOUaeiou'
    let vowelsCount = 0;
    
     for(var i = 0; i < str.length ; i++)
      {
        if (vowelList.indexOf(str[i]) !== -1)
        {
          vowelsCount += 1;
        }
      }
      return vowelsCount;
    }
    
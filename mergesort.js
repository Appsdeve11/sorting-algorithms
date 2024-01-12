function mergeSort(arr) {
    if (arr.length <= 1) {
      return arr;
    }
  
    
    const mid = Math.floor(arr.length / 2);
    const leftHalf = mergeSort(arr.slice(0, mid));
    const rightHalf = mergeSort(arr.slice(mid));
  
   
    return merge(leftHalf, rightHalf);
  }
  
  function merge(arr1, arr2) {
    const mergedArr = [];
    let i = 0;
    let j = 0;
  
    
    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] < arr2[j]) {
        mergedArr.push(arr1[i]);
        i++;
      } else {
        mergedArr.push(arr2[j]);
        j++;
      }
    }
  
    
    while (i < arr1.length) {
      mergedArr.push(arr1[i]);
      i++;
    }
  
    
    while (j < arr2.length) {
      mergedArr.push(arr2[j]);
      j++;
    }
  
    return mergedArr;
  }
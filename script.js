/** @format */

let arr = [
    { id: 1, name: "john", age: "18", marks: 80 },
    { id: 2, name: "jack", age: "20", marks: 85 },
    { id: 3, name: "karen", age: "19", marks: 35 },
  ];

  function PrintStudentswithMap() {
    //Write your code here , just console.log
    let modifiedArr= arr.map((obj) => {
        if(obj.marks>50)
            return obj;
    });
    console.log(modifiedArr);
  }

  function PrintStudentsbyForEach() {
    //Write your code here , just console.log
    arr.forEach(function(obj){
        if(obj.marks>50)
            console.log(obj);
    })
  }

  function addData() {
    //Write your code here, just console.log
    let newObj= {
        id: 4, 
        name: "susan", 
        age: "20", 
        marks: 45  
    }
    arr.push(newObj);
    console.log(arr);
  }

  function removeFailedStudent() {
    //Write your code here, just console.log
    arr.filter((obj, index) => {
        if(obj.marks<=50)
            delete arr[index];
    })
    console.log(arr);
  }

  function concatenateArray() {
    //Write your code here, just console.log
    let newObj1= {
        id: 4, 
        name: "priyam", 
        age: "21", 
        marks: 48  
    }
    let newObj2= {
        id: 5, 
        name: "shivam", 
        age: "18", 
        marks: 66  
    }
    let newObj3= {
        id: 6, 
        name: "radhika", 
        age: "23", 
        marks: 82 
    }
    arr.push(newObj1);
    arr.push(newObj2);
    arr.push(newObj3);
    console.log(arr);
  }
concatenateArray();

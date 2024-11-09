// task 1
async function AsyncAwait(values) {
    for (let value of values) {
      await new Promise(resolve => setTimeout(() => {
        console.log(value);
        resolve();
      }, 1000)); 
    }
  }
  AsyncAwait([55, 50, 90, 88, 52]);


  //task2
  async function awaitCall() {
  
    const apiPromise = new Promise(resolve => { setTimeout(() => resolve('API response data'), 2000); 
    });
  
    const data = await apiPromise;
    console.log(data); 
  }
  
  awaitCall();


//   task4
async function One() {
    await new Promise(resolve => setTimeout(() => {
      console.log(' One');
      resolve();
    }, 1000));
  }
  
  async function Two() {
    await new Promise(resolve => setTimeout(() => {
      console.log('Two');
      resolve();
    }, 1000));
  }
  
  async function Three() {
    await new Promise(resolve => setTimeout(() => {
      console.log(' Three');
      resolve();
    }, 1000));
  }
  
  async function Functions() {
    await One();
    await Two();
    await Three();
  }
  
  Functions();

//   task5
async function concurrentRequests() {
    const apiCallOne = new Promise(resolve => setTimeout(() => resolve('API one '), 2000));
    const apiCallTwo = new Promise(resolve => setTimeout(() => resolve('API two '), 3000));
  
    const results = await Promise.all([apiCallOne, apiCallTwo]);
    console.log('Both API calls resolved:', results);
  }
  
  concurrentRequests();
  
  

  
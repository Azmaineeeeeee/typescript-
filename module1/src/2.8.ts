{
    // promise
     type Something = {something: string}
    const createPromise = (): Promise<Something> => {
        return new Promise((resolve, reject) => {
           const data: {something: string} = {something: 'something'};
           if(data) {
            resolve(data);
           }
           else {
            reject("Failed to load");
           }
        });
    };

    //Calling the promise
    const showData = async ()  =>{
        const data: Something = await createPromise();
        console.log(data)
    }

    showData();
}
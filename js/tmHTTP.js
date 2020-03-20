/* @author Tanvir Mahin
 * @version 1.00
 */
class TMhttp{
    // Make a GET request
    get(url){
        return new Promise((resolve , reject) => {
            fetch(url)
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err));  
        })
    }

    //Make a POST request
    post(url , data){
        return new Promise((resolve, reject) => {
            fetch(url , {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8'
                },
                body: JSON.stringify(data),
            })
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err)); 
        }); 
    }
    //Make a PUT request
    put(url , data){
        return new Promise((resolve, reject) => {
            fetch(url , {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8'
                },
                body: JSON.stringify(data),
            })
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err)); 
        }); 
    }
    //Delete request
    delete(url){
        return new Promise((resolve, reject) => {
            fetch(url , {
                method: 'DELETE',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8'
                }
            })
            .then(res => res.json())
            .then(() => resolve('Resource Deleted...'))
            .catch(err => reject(err)); 
        }); 
    }
}
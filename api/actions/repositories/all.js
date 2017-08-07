import { repository } from '../../services';

export default function all(req, params) {
  const [username] = params;
  return new Promise((resolve, reject) => {
      if (!username){
        reject({
          status: 404,
          message: "Not Found"
        });
      }
      repository.getAllByUserName(username).then(resolve,
      (reason) =>{
        //ToDo:  nlyze rejection reason with correct status
        reject(Object.assign({}, { status: 404}, reason));
      });
  });
}

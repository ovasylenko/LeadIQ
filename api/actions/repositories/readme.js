import { repository } from '../../services';

export default function readme(req, params) {
  const [username, repo] = params;
  return new Promise((resolve, reject) => {
      if (!username || !repo){
        reject({
          status: 404,
          message: "Not Found"
        });
      }
      repository.getReadMeContent(username, repo).then(resolve,
      (reason) =>{
        //ToDo:  nlyze rejection reason with correct status
        reject(Object.assign({}, { status: 404}, reason));
      });
  });
}

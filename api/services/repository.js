import request from 'request';

export default {
    getAllByUserName: (username) => {
      const options = {
        url: `https://api.github.com/users/${username}/repos`,
        headers: {
          'User-Agent': 'test app'
        }
      };
      return new Promise((resolve, reject) => {
        let chunks = [];
        request
          .get(options)
          .on('error', function(err) {
            reject(err)
          })
          .on('data', function(data) {
            chunks.push(data);
          })
          .on('end', function () {
            const data = JSON.parse(chunks.join("").toString());
            if (data instanceof Array) {
              resolve(data.map((it) => {
                return { name: it.name }
              }));
            }
            reject(data);
          });
      });
    },
    getReadMeContent:(username, repo) =>{
      const options = {
        url: `https://api.github.com/repos/${username}/${repo}/readme/`,
        headers: {
          'User-Agent': 'test app'
        }
      };
      return new Promise((resolve, reject) => {
        let chunks = [];
        request
          .get(options)
          .on('error', function(err) {
            reject(err)
          })
          .on('data', function(data) {
            chunks.push(data);
          })
          .on('end', function () {
            const data = JSON.parse(chunks.join("").toString());
            if (!!data.content) {
              resolve(new Buffer(data.content, 'base64').toString('ascii'));
            }
            reject(data);
          });
      });
    }
} 


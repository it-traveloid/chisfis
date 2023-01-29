import { IncomingForm } from 'formidable'
import { promises as fs } from 'fs'

export const config = {
	api: {
		bodyParser: false,
	},
};

export default async (req,res) =>  {
	// console.log(req)
	new Promise((resolve, reject) => {
		const form = new IncomingForm({ multiples: true, uploadDir : 'public/uploads/'  });
		// console.log(form)
		
		form.parse(req, (err, fields, files) => {
			if (err) return reject(err);
			resolve({ files });
			// console.log('files',files.profile_picture)
			let fn,orig
			// console.log('len',files.profile_picture.length)
			if ( files.profile_picture instanceof Array) {
				for (var x = 0; x < files.profile_picture.length; x++) {
					 fn=files.profile_picture[x].originalFilename;
					const orig= '/root/wb'+'/public/uploads/'+fn
					console.log('orig ',orig)
					fs.rename(files.profile_picture[x].filepath, orig  );
				}
			}
			else {
				 fn=files.profile_picture.originalFilename;
				 orig= '/root/wb'+'/public/uploads/'+fn
				console.log('orig ',orig)
				fs.rename(files.profile_picture.filepath, orig  );
			}
			res.status(200).json({ data: '/uploads/'+fn })
			
		});
	});
	
	
}

import express from 'express';
import cors from 'cors';

class Server {
	private app: express.Application;

	public constructor() {
		this.app = express();
		this.configExpress();
	}

	private configExpress(): void {
		this.app.use(express.json());
		this.app.use(cors());

		this.routes();

		this.app.listen(3333);
	}

	private middlewares(): void {
	}

	private routes(): void {
		this.app.get('/', (req, res) => {
			res.send('bateu no GET! :)');
		})
	}
}

new Server();
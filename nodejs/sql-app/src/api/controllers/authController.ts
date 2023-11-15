import { Request, Response, Router } from 'express';
import { LoginDTO } from '../../app/dtos/login.dto';
import { AuthService } from '../../app/services/authService';

export class AuthController {
    public router: Router;
    private authService: AuthService;

    constructor(authService: AuthService) {
        this.authService = authService;
        this.router = Router();
        this.routes();
    }

    public async login(req: Request, res: Response): Promise<Response> {
        try {
            const loginDTO: LoginDTO = req.body;
            const loginResponse = await this.authService.login(loginDTO);
            return res.status(200).json(loginResponse);
        } catch (error) {
            console.log(error);
            return res.status(400).json({ message: error });
        }
    }

    public routes() {
        this.router.post('/login', this.login.bind(this));
    }
}
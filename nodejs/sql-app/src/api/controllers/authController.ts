import { Request, Response, Router } from 'express';
import { LoginDTO } from '../../app/dtos/login.dto';
import { AuthService } from '../../app/services/authService';
import logger from '../../infrastructure/logger/logger';

export class AuthController {
    public router: Router;
    private authService: AuthService;

    constructor(authService: AuthService) {
        this.authService = authService;
        this.router = Router();
        this.routes();
    }
    /**
     * @swagger
     * /login:
     *   post:
     *     summary: Inicia sesión de un usuario en sql app
     *     tags: [Autenticación]
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             $ref: '#/components/schemas/LoginCredentials'
     *     responses:
     *       200:
     *         description: Inicio de sesión exitoso
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 token:
     *                   type: string
     *                 user:
     *                   type: object
     *                   properties:
     *                     id:
     *                       type: string
     *                     username:
     *                       type: string
     *       400:
     *         description: Error en la solicitud
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 message:
     *                   type: string
     *       401:
     *         description: Credenciales inválidas
     */
    public async login(req: Request, res: Response): Promise<Response> {
        try {
            const loginDTO: LoginDTO = req.body;
            const loginResponse = await this.authService.login(loginDTO);
            return res.status(200).json(loginResponse);
        } catch (error) {
            logger.error('There is an error in the login process', error);
            if (error instanceof Error) {
                return res.status(400).json({ message: error.message });
            }
            return res.status(400).json({ message: error });
        }
    }

    public routes() {
        this.router.post('/login', this.login.bind(this));
    }
}
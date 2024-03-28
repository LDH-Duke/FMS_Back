import { Service, Inject } from 'typedi';
import jwt from 'jsonwebtoken';
import { randomBytes } from 'crypto';
import models from '../../models';
import { logger } from '../../utils/winstonLogger';

export default class AuthService {
  /**
   * constructor
   * --
   */
  constructor() {}
  // @Inject('userModel') private userModel : Models.UserModel,
  // private mailer: MailerService,
  // @Inject('logger') private logger,
  // @EventDispatcher() private eventDispatcher: EventDispatcherInterface,

  /**
   * 사용자 전체 조회
   * --
   */
  async FindAll() {
    try {
      console.log('동작')
      const res = await models.users.findAll({raw:true})
      
      return res
    } catch (e) {
      logger.error(`[UserService][FindAll] Error: ${e.message}`);
      throw e;
    }
  }
}

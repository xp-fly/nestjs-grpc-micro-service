import {Injectable} from "@nestjs/common";
import {UserServiceLogin} from "../interfaces/user.interface";

@Injectable()
export class UserService {
  login(data: UserServiceLogin) {
    console.log(data);
    return 'dsdasdsdasdasdadsadasdasd';
  }
}

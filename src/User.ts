
class User {
  private name: string;
  private age: number;
  private address: string;
  private phoneNumber: string;
  private email: string;
  private role: string;
  private isActive: boolean;
  private isVerified: boolean;
  private isPremium: boolean;
  private lastLogin: Date;
  private registrationDate: Date;
  private profilePicture: string;
  private bio: string;
  private interests: string[];

  constructor({name,
      age,
      address,
      phoneNumber,
      email,
      role,
      isActive,
      isVerified,
      isPremium,
      lastLogin,
      registrationDate,
      profilePicture,
      bio,
      interests}:UserConstructorPayload

  ) {
    this.name = name;
    this.age = age;
    this.address = address;
    this.phoneNumber = phoneNumber;
    this.email = email;
    this.role = role;
    this.isActive = isActive;
    this.isVerified = isVerified;
    this.isPremium = isPremium;
    this.lastLogin = lastLogin;
    this.registrationDate = registrationDate;
    this.profilePicture = profilePicture;
    this.bio = bio;
    this.interests = interests;
  }

  // ... (other methods)
}

type UserConstructorPayload = {   name: string,
  age: number,
  address: string,
  phoneNumber: string,
  email: string,
  role: string,
  isActive: boolean,
  isVerified: boolean,
  isPremium: boolean,
  lastLogin: Date,
  registrationDate: Date,
  profilePicture: string,
  bio: string,
  interests: string[]}

  /*

  Пахнет Long Parameter List и Large Class

  Что было плохо и почему?
    1) constructor класса получает длинный список параметров
    2) класс сильно большой и его можно разделить на классы и подклассы

  Что стало лучше и почему?
   1) можно заменить параметры на объект

*/
  
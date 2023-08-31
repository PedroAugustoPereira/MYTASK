module.exports = {
  roots: ["<rootDir>/src"], //diretório raiz
  collectConverageFrom: ["<rootDir>/src/**/*.ts"], //onde ele vai pegar o arquivo
  testEnvironment: "node", //linguagem node
  transform: {
    //semppre que usar o ts usar o ts-jest
    ".+\\.ts$": "ts-jest",
  },
  moduleNameMapper: {
    "@/(.*)": "<rootDir>/src/$1",
  },
}

//TESTES

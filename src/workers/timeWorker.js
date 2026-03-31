self.onmessage = function (event) {
  console.log("WORKER recebeu:", event.data);

  switch(event.data){
    case 'FAVOR': {
        self.postMessage('Sim, posso fazer um favor')
        break;
    }
    case 'FALA OI': {
        self.postMessage('Ok: OI')
        break;
    }
    case 'FECHAR': {
        self.postMessage('Tá bom, vou fechar para você')
        self.close()
        break;
    }
    default:
        self.postMessage('Não entendi')
  }
};

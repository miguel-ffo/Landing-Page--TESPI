# 💰 Corretora Crypto - Visualizador de Preços

Este projeto é uma página simples em HTML, CSS e JavaScript que consome a API pública da Coinext para exibir os preços atualizados de criptomoedas como Bitcoin (BTC), Litecoin (LTC) e Ethereum (ETH).

---

## 🚀 Como executar o projeto localmente

1. **Clone ou baixe os arquivos do projeto:**
   - Certifique-se de ter os arquivos:
     - `index.html`
     - `style.css`
     - `script.js`

2. **Rode um servidor local simples**

   Você pode usar Python para isso (não precisa instalar frameworks). No terminal, vá até a pasta do projeto e rode:

   - Para Python 3:
     ```bash
     python -m http.server
     ```

   - Para Python 2:
     ```bash
     python -m SimpleHTTPServer
     ```

   Isso abrirá um servidor local geralmente em: [http://localhost:8000](http://localhost:8000)

3. **Acesse a página no navegador:**

   Abra o navegador e vá até:
```
   http://localhost:8000/
```

---

## ⚠️ Aviso sobre CORS

A API da Coinext **não permite requisições diretas via navegador por causa de restrições de CORS**.

Para contornar isso, foi utilizado o serviço gratuito:

🔗 [https://cors-anywhere.herokuapp.com/](https://cors-anywhere.herokuapp.com/)

### 🔧 Como habilitar:
1. Acesse este link:

```
https://cors-anywhere.herokuapp.com/corsdemo
```

2. Clique no botão `Request temporary access to the demo server`.
3. Após isso, recarregue a página local.

> **Atenção:** o `cors-anywhere` é uma solução temporária apenas para testes e estudos. Para produção, é recomendado criar um proxy próprio ou backend intermediário.

---

## 📦 Estrutura de arquivos

├── index.html
├── script.js
└── style/
└── style.css


---

## 📜 Licença

Este projeto é apenas para fins educacionais.

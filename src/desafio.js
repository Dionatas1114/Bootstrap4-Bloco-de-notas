class BlocoDeNotas {
    constructor() {
        this.titulo = document.getElementById('titulo');
        this.conteudo = document.getElementById('conteudo');
        this.data = document.getElementById('data');
        this.hora = document.getElementById('hora');
        this.lista = [];
        this.inserir = document.getElementById('btnInserir');
        this.divNotas = document.getElementById('notas');
        this.divTotal = document.getElementById('total');
        this.addEvent();
    }

    addEvent() {
        this.inserir.onclick = event => this.inserirNaLista();

    }

    inserirNaLista() {

        if (this.titulo.value == "" || this.conteudo.value == "" || this.data.value == "" || this.hora.value == "") {
            alert("Erro# Os campos estão em branco ou não foram preenchidos corretamente!");

        } else {
            const nota = {
                titulo: this.titulo.value,
                conteudo: this.conteudo.value,
                data: this.data.value,
                hora: this.hora.value
            }
            this.lista.push(nota);
        }

        this.inserirDados();
        this.contarNotas();
    }

    inserirDados() {
        this.divNotas.innerHTML = '';

        for (const notas of this.lista) {
            this.divNotas.innerHTML += `
                <div class='estiloNotas'>
                    <label> Título: ${notas.titulo} </label>
                        <br/>
                    <label> Conteúdo: ${notas.conteudo} </label>
                        <br/>
                    <label> Data: ${notas.data} </label>
                        <br/>
                    <label> Hora: ${notas.hora} </label>  
                        <br/>             
                </div>
            `;
        }
    }

    contarNotas() {
        this.divTotal.innerHTML = '';

        this.divTotal.innerHTML += `${this.lista.length}`;
    }
}

new BlocoDeNotas();
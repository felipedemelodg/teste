export default class Model {
    static instructores = {
        RIVALDO: {
            signature: './src/assets/img/rivaldoFdF__signature.webp',
            name: 'Rivaldo Fernandes da Fonseca',
            roles: ["Téc.Seg.Trabalho", "Enfermeiro", "Alpinista Industrial"],
            registry: ['0011122/PE', '676199', 'N1 355']
        },
        LUIZ: {
            signature: '/src/assets/img/luizA__signature.webp',
            name: "Luiz Alves",
            roles: ["Técnico em Eletrotécnico"],
            registry: ["RNP CFT Nº 02122860480"]
        },
        UMBERTO: {
            signature: '/src/assets/img/humbertoA__signature.webp',
            name: "Umberto Alves",
            roles: ["SIBOCIPE", "APEBC"],
            registry: ["0019", "B-10046"]
        },
        ELI: {
            signature: '/src/assets/img/eliC__signature.webp',
            name: "Eli Carlos de Souza Pinto",
            roles: ["TST:", "Profissional de Ed. Física"],
            registry: ["Reg. MTE 4147-PE", "CREF: 009903-G/PE"]
        }

    }

    static resposible = {
        FABIO: {
            name: "Fabio Sampaio",
            enterprise: 'FSC SEGURANÇA DO TRABALHO',
            CNPJ: " 39.522.472/0001-40"
        }
    }
    static findInstructorByName(name) {
        const allInstructors = Object.values(this.instructores);
        // Procura o instrutor cujo .name seja idêntico ao selecionado
        return allInstructors.find(inst => inst.name === name) || null;
    }
    static validateInstructorName(string) {
        // console.log(string)
        const text = "Selecione o instrutor..."
        if (string === text) {
            return false
        }
    }
    static isListEmpty(count) {
        return Number(count) === 0;
    }
     static isValidLengthTwo(string) {
        if (!string) return false

        return string.trim().length >= 2
    }
    static isValidLength(string) {
        if (!string) return false

        return string.trim().length >= 3
    }
    static hasNumber(string) {
        return /\d/.test(string)
    }
    static isZero(number) {
        return number <= 0
    }
    static getInstructors() {
        return this.instructores
    }

    static getResponsible() {
        return this.resposible
    }

}


import styles from "./Formulario.module.css";
import { useState } from "react";
import CampoFormulario from "../../components/CampoFormulario";
import ListaSuspensa from "../../components/ListaSuspensa";
import Textarea from "../../components/Textarea";
import { BotaoFormulario } from "../../components/Botao";

function Formulario({ aoCadastrar, categorias }) {
  const [formData, setFormData] = useState({
    titulo: "",
    descricao: "",
    imagem: "",
    link: "",
    categoria: "",
  });

  const aoAlterarCategoria = (valor) => {
    setFormData({ ...formData, categoria: valor });
  };

  const limparFormulario = () => {
    setFormData({
      titulo: "",
      descricao: "",
      imagem: "",
      link: "",
      categoria: "",
    });
  };

  const validarFormulario = () => {
    const { titulo, descricao, imagem, link, categoria } = formData;

    if (!titulo.trim()) {
      alert("Por favor, insira o título.");
      return false;
    }
    if (titulo.length < 3) {
      alert("O título deve ter pelo menos 3 caracteres.");
      return false;
    }

    if (!descricao.trim()) {
      alert("Por favor, insira a descrição.");
      return false;
    }
    if (descricao.length < 10 || descricao.length > 250) {
      alert("A descrição deve ter entre 10 e 250 caracteres.");
      return false;
    }

    if (!imagem.trim() || !/^https?:\/\/[^\s/$.?#].[^\s]*$/.test(imagem)) {
      alert("Por favor, insira uma URL de imagem válida.");
      return false;
    }

    if (!link.trim() || !/^https?:\/\/[^\s/$.?#].[^\s]*$/.test(link)) {
      alert("Por favor, insira uma URL de vídeo válida.");
      return false;
    }

    if (!categoria) {
      alert("Por favor, selecione uma categoria.");
      return false;
    }

    return true;
  };

  const aoSalvar = (evento) => {
    evento.preventDefault();

    if (!validarFormulario()) {
      return;
    }

    alert("Vídeo cadastrado com sucesso!");
    aoCadastrar(formData); // Envia o vídeo para a lista
    limparFormulario(); // Reseta o formulário
  };

  return (
    <form onSubmit={aoSalvar} className={styles.formulario}>
      <div className={styles.cabecalho}>
        <h1>Novo vídeo</h1>
        <p>Complete o formulário para criar um novo card de vídeo.</p>
      </div>

      <div className={styles.sessaoCampos}>
        <h2>Criar Card</h2>
        <div className={styles.campos}>
          <CampoFormulario
            obrigatorio={true}
            label="Título"
            placeholder="Insira o título"
            valor={formData.titulo}
            aoAlterado={(valor) => setFormData({ ...formData, titulo: valor })}
            tipo="text"
            minLength="3"
          />
          <ListaSuspensa
            obrigatorio={true}
            label="Categoria"
            placeholder="Selecione uma categoria..."
            itens={categorias}
            valor={formData.categoria}
            aoAlterado={aoAlterarCategoria}
          />
          <CampoFormulario
            obrigatorio={true}
            label="Imagem"
            placeholder="URL da imagem"
            valor={formData.imagem}
            aoAlterado={(valor) => setFormData({ ...formData, imagem: valor })}
            tipo="url"
          />
          <CampoFormulario
            obrigatorio={true}
            label="Vídeo"
            placeholder="URL do vídeo"
            valor={formData.link}
            aoAlterado={(valor) => setFormData({ ...formData, link: valor })}
            tipo="url"
          />
          <Textarea
            obrigatorio={true}
            label="Descrição"
            placeholder="Sobre o que é esse vídeo?"
            valor={formData.descricao}
            aoAlterado={(valor) => setFormData({ ...formData, descricao: valor })}
            tipo="text"
            minLength="10"
            maxLength="250"
          />
        </div>
        <div className={styles.botoes}>
          <BotaoFormulario children="Salvar" type="submit" />
          <BotaoFormulario
            children="Apagar"
            type="reset"
            onClick={limparFormulario}
          />
        </div>
      </div>
    </form>
  );
}

export default Formulario;
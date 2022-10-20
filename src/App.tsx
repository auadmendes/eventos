import { Header } from './components/Header'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'

import styles from './App.module.css'
import './global.css'

const posts = [
  {
    id: 1,
    author: {
      avatarURL: 'https://github.com/auadmendes.png',
      name: 'Luciano Mendes',
      role: 'Web/Mobile developer'
    },
    content: [
      {
        type: 'paragraph',
        content:
          'Curso Prático Intervenção Terapêutica através da Arte e da Música'
      },

      {
        type: 'paragraph',
        content:
          'A arte e a música são utilizadas, desde há séculos, como modalidades terapêuticas, visando contribuir para uma melhor saúde mental e consequente qualidade de vida com recurso à utilização de meios artísticos (e.g. utiliza as linguagens plástica, sonora, dramática, corporal e literária, envolvendo as técnicas de desenho, pintura, modelagem, construções, sonorização, música, dança, drama e poesia), oferecendo um ambiente propício ao surgimento da sua expressividade espontânea e portadora de sentido para a vida do ser humano (Sei, 2009). Estas modalidades terapêuticas têm sido utilizadas em diferentes intervenções, tais como a reabilitação física e mental, reabilitação psicossocial, em projetos comunitários de educação para a saúde, em doenças degenerativas, deficiências físicas e mentais, entre outras. O gabinete ReConstruir, em colaboração com a Dr.ª Diana Santos de Sousa, vão promover o Curso Prático "Intervenção Terapêutica Através da Arte e da Música", em Live Streaming (videoaulas em direto com o formador), com o objetivo geral de promover nos formandos a capacidade de conhecer e intervir através da arte e da música. De uma forma mais específica, os formandos devem ser capazes de conhecer a intervenção terapêutica através da arte e música, nomeadamente a sua eficácia e atividades práticas.'
      },

      {
        type: 'link',
        content: 'ReConstruir Psicologia Desenvolvimento Pessoal.'
      },

      {
        type: 'paragraph',
        content: 'de novembro de 2022 (9h30 às 12h30 | 14h30 às 17h30).'
      }
    ],
    publishedAt: new Date('2022-10-17 19:50:00')
  },
  {
    id: 2,
    author: {
      avatarURL:
        'https://scontent-sea1-1.xx.fbcdn.net/v/t1.6435-9/86809050_2764784156962377_4536797396696301568_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=_Npg4lU6cGMAX_g9HuI&_nc_ht=scontent-sea1-1.xx&oh=00_AT8JBLUdLcmttgxPy5Yh9mUftOEACq3BQFF5YJQy0PqzDA&oe=63742B23',
      name: 'Jaquelaine Bueno',
      role: 'Pedagoga'
    },
    content: [
      {
        type: 'paragraph',
        content: 'Baile da Saudade - Forró - Singos Club - Serra - ES'
      },

      {
        type: 'paragraph',
        content:
          'Baile da Saudade (Forró) no dia 22/10 ( Sábado ) a partir das 20:30h no Singos Club em Jardim Limoeiro na Serra. Atrações: Luiz Paulo Forrozão, Cristian & Anderson, Remelexo, Trio Kualyson, Os colibri de ouro, Rodrigão do Forró, Alan Carvalho, Ronny e Marcos. Mulherada liberada até às 21:30h Homem: R$20 - Mulher R$15 Sorteio de vários brindes ao longo da noite. Realização: Viana Eventos Singos Club Av. Lourival Nunes, S/n - Jardim Limoeiro, Serra - ES'
      },

      {
        type: 'link',
        content: 'Siga @vianastudiodedanca'
      },

      {
        type: 'paragraph',
        content:
          'Próxima Segunda no Studio de dança Viana em Laranjeiras: 19h as 20h.'
      }
    ],
    publishedAt: new Date('2022-09-17 11:38:23')
  }
]
export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}

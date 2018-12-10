import React from "react";
import { Helmet } from "react-helmet";
import StoryMedia from "components/StoryMedia";
import ExternalLink from "components/ExternalLink";
import Container from "components/blocks/Container";
import Title from "components/blocks/Title";
import Paragraph from "components/blocks/Paragraph";
import FeaturedText from "components/blocks/FeaturedText";
import Quote from "components/blocks/Quote";
import Note from "components/blocks/Note";
import FileLink from "components/FileLink";
import EndChapter from "../../../components/blocks/EndChapter";

export default () => (
  <article>
    <Helmet>
      <title>Mercury | The Amazon Sacked</title>
    </Helmet>
    <Container>
      <Title as="h2">Mercury</Title>
      <Note>
        <p>
          The large quantities of mercury used in the purification of gold is contaminating the Amazon. Obtaining gold is the main aim of the illegal mining.
        </p>
      </Note>
      <Paragraph>
      <StoryMedia
        media={{
          id: "image-1",
          type: "image",
          data: {
            credits: "Oscar Mujica/FZS Perú",
            src: require("photos/chapter2/04_OscarMujica-FZS_PE_Colorado.jpg")
          }
        }}><strong>The scars on the ground, the murky waters of the rivers</strong> are the obvious impacts of the illegal mining</StoryMedia>. But there is an invisible evil that contaminates the Amazonian fauna and the inhabitants of the region. According to several studies, mercury is affecting indigenous and local populations who live nearby or work in gold mining areas, as well as those who consume Amazonian fish as part of their diet.
      </Paragraph>
      <Paragraph>
        No one eats as much fish in their diet as the people of the Amazon.
        <StoryMedia
              media={{
                id: "galery-1",
                type: "gallery",
                data: {
                  items: [
                    {
                      src: require("photos/chapter2/gallery-1/01_CINCIA_IMG1678.jpg"),
                      credits: "CINCIA"
                    },
                    {
                      src: require("photos/chapter2/gallery-1/02_DSC05788.jpg"),
                      credits: "Natalie Szponar"
                    },
                    {
                      src: require("photos/chapter2/gallery-1/03_DSC05797.jpg"),
                      credits: "Natalie Szponar"
                    },
                    {
                      src: require("photos/chapter2/gallery-1/04_NatalieSzponar_DSC06069.jpg"),
                      credits: "Natalie Szponar"
                    },
                    {
                      src: require("photos/chapter2/gallery-1/05_NatalieSzponar_DSC06131.jpg"),
                      credits: "Natalie Szponar"
                    },
                    {
                      src: require("photos/chapter2/gallery-1/06_NatalieSzponar4_DSC06137.jpg"),
                      credits: "Natalie Szponar"
                    },
                    {
                      src: require("photos/chapter2/gallery-1/07_NatalieSzponar_DSC06141.jpg"),
                      credits: "Natalie Szponar"
                    },
                    {
                      src: require("photos/chapter2/gallery-1/08_CINCIA_DSCF3067.jpg"),
                      credits: "CINCIA"
                    },
                    {
                      src: require("photos/chapter2/gallery-1/09_CINCIA_IMG_0483.jpg"),
                      credits: "CINCIA"
                    },
                    {
                      src: require("photos/chapter2/gallery-1/10_CINCIA_IMG_3955.jpg"),
                      credits: "CINCIA"
                    },
                    {
                      src: require("photos/chapter2/gallery-1/11_AldoRivas_IMG_4152.jpg"),
                      credits: "Aldo Rivas"
                    },
                    {
                      src: require("photos/chapter2/gallery-1/12_AldoRivas_IMG_4167.jpg"),
                      credits: "Aldo Rivas"
                    },
                    {
                      src: require("photos/chapter2/gallery-1/13_CINCIA_P1000164.jpg"),
                      credits: "CINCIA"
                    },
                    {
                      src: require("photos/chapter2/gallery-1/14_CINCIA_P3240166.jpg"),
                      credits: "CINCIA"
                    },
                    {
                      src: require("photos/chapter2/gallery-1/15_NatalieSzponar_PacoMaizal.jpg"),
                      credits: "Natalie Szponar"
                    }
                  ]
                }
              }}
            > Riverine and indigenous peoples get most of their protein from freshwater species</StoryMedia>. But while fish guarantee a rich and tasty diet, they may also contain threats to the health of these populations. Studies have revealed an accumulation of mercury in several fish species used for human consumption at levels above those recommended by the World Health Organization (WHO).
      </Paragraph>
      <Paragraph>
        This metal is bio-accumulative in animal tissue. That is, concentrations of mercury will be higher in fish that feed on smaller fish and its negative effect on humans will be even more intense.
      </Paragraph>
      <Paragraph>
        Mercury is used to purify gold. Residues contaminate water and air. Returned to the environment as methylmercury, this element causes serious and highly toxic damage thanks to persistent accumulation. The compound affects the central nervous system, causing problems of sight loss, cognitive and motor impacts, heart disease and other handicaps. Pregnant women and children are the most vulnerable categories.
      </Paragraph>
      <Paragraph>
        In Peru, preliminary results from a study by CINCIA reveal that <FileLink
          href={require("documents/chapter2/CINCIA-Research-Brief-2-v7.2-Mercurio-en-peces-de-pozas-mineras.pdf")}
          format="pdf"
          size="1.7MB"
        >mercury levels in fish are 43% higher in wells abandoned by gold</FileLink> mining <StoryMedia
        media={{
          id: "galery-2",
          type: "gallery",
          data: {
            credits: "CINCIA",
            items: [
              {
                src: require("photos/chapter2/gallery-2/01_CINCIA_ColetaPeixe_1.jpg"),
                credits: "CINCIA"
              },
              {
                src: require("photos/chapter2/gallery-2/02_CINCIA_ColetaPeixe_a.jpg"),
                credits: "CINCIA"
              },
              {
                src: require("photos/chapter2/gallery-2/03_CINCIA_ColetaPeixe_b.jpg"),
                credits: "CINCIA"
              },
              {
                src: require("photos/chapter2/gallery-2/04_CINCIA_lab01.jpg"),
                credits: "CINCIA"
              }
            ]
          }
        }}>than in areas where there is no gold prospecting</StoryMedia>. Samples of fish were collected in seven lakes in the abandoned mining areas of Maze, Tambopata, Madre de Dios and Inambari. In addition, fish samples were collected in two lakes or riverside lagoons and a river in the Manu National Park, as a control area with no mining activity. 
      </Paragraph>
      <Paragraph>
        In 2010 in Venezuela, at the request of the Indigenous Organization of Caura Kuyujani, <FileLink
          href={require("documents/chapter2/Informe_riesgo_exp_metilmercurio_Caura.pdf")}
          format="pdf"
          size="1.4MB"
        >a study was undertaken to determine the mercury content in some of the main fish species consumed by communities in the upper Caura basins</FileLink>. All the samples had an average value greater than the 0.5 mg/kg allowed by the World Health Organization as a safe limit for occasional users, but not for high-frequency consumers such as indigenous populations.
      </Paragraph>
      <Paragraph>
        The same occurred on the Orinoco River, along its course through the state of Amazonas along the border with Colombia, where researchers Carlos Lasso and Luis Perez had already shown in 2003 that <FileLink
          href={require("documents/chapter2/2006_Lasso_et_al_Peces_Ventuari_Venezuela_114p.pdf")}
          format="pdf"
          size="11.8MB"
        >nine of the 17 fish species usually consumed locally contained levels ​​of mercury superior to those recommended by the WHO as the maximum permitted</FileLink>. Subsequently in 2009 and 2010, members of Ye'kwana indigenous group from the Caura, Bolívar and Uwottüja regions, along the Orinoco and in the state of Amazonas, were found to have high levels of mercury in their hair. This situation was replicated in fish in the Paragua and Caroni rivers, according to research in 2009. Thus prior to the massive boom in gold mining, all the main rivers of the Venezuelan Amazon contained fish with high mercury levels.
      </Paragraph>
      <Paragraph>
        One of the most affected regions of the Amazon is the <StoryMedia
        icon="map"
        media={{
        id: "map_03",
        type: "mapbox",
          data: {
            map: "map2",
            legend:"legend9",
            update:"map2",
            showExtraLayers: ['LEGENDA4- Yanomami_tis-afectadas'],
            coordinates: [-63.693113,2.766774],
            zoomNumber: 5.50,
            zoomMin: 5,
            zoomMax: 10
          }
        }}>Yanomami territory, which extends between Brazil and Venezuela</StoryMedia>. A <FileLink
        href={require("documents/chapter2/diagnostico_contaminacao_mercurio_terra_indigena_yanomami.pdf")}
        format="pdf"
        size="1.4MB">study by the Instituto Socioambiental (ISA) in partnership with the Oswaldo Cruz Foundation (Fiocruz)</FileLink> collected 239 hair samples in nine villages in November 2014. Priority was given to categories most at risk of contamination: women of reproductive age and adults with some history of direct contact with gold mining activities. The study also collected 35 samples of fish that constitute a fundamental part of the community diet. The study was conducted in the Papiú and Waikás regions, where Yanomami and Ye'kwana ethnic groups live.
      </Paragraph>
      <Paragraph>
        "The most worrisome case was that of the Yanomami community of Aracaçá, in the region of Waikás, where 92% of all samples presented high levels of contamination. Of all communities sampled, this was the only one with prospecting activity present. In the Papiú region, where the lowest contamination rates were recorded - 6.7% of the samples analysed - the presence of prospecting was less pronounced", said a summary of the <StoryMedia
              media={{
              id: "video-1",
              type: "youtube",
              data: {
                id: "XWF1MKP7pwY"
              }
              }}>results published by ISA</StoryMedia>.
      </Paragraph>
      <Paragraph>
        In Colombia, much of the mining activity occurs in frontier areas. This means that shared river basins become the main routes of mercury contamination. The most affected area is along the Caquetá River. Another study, on the Apaporis River by the National Institute of Health of Colombia revealed that up to 80% of the indigenous populations of this region are contaminated by mercury. 
      </Paragraph>
      <Paragraph>
        In Bolivia, data from the Bolivia Documentation and Information Centre (CEDIB) show that <ExternalLink href="https://cedib.org/post_type_mapas/contaminacion-por-mercurio-en-la-amazonia-de-bolivia/" language="es">in 2015 total imports of mercury reached 35,793 kilos, 20 times more than the 1,710 kilos recorded in 2010</ExternalLink>. The book "Mercury in Bolivia: Baseline Uses, Emissions and Pollution", published in 2016 by the ministries of foreign affairs and the environment, states that with the release of 133 tons of mercury a year, Bolivia is the third most contaminated country in the Americas, with 47% coming from gold exploration.
      </Paragraph>
      <EndChapter>
        <strong className='regular-title'>Convenção de Minamata</strong>
        <p className='regular-txt'>
          A grave situação de contaminação por este mercúrio metálico em vários países levou à criação, pelas Nações Unidas, da <ExternalLink href="https://treaties.un.org/Pages/ViewDetails.aspx?src=IND&mtdsg_no=XXVII-17&chapter=27&clang=_en" language="en">Convenção de Minamata, em memória do desastre humano e ambiental que ocorreu na área costeira de Minamata</ExternalLink>, Japão, causada pelo consumo de peixe com altos níveis de mercúrio. O acordo entre 101 membros prevê maior controle sobre a importação, comercialização e descarte de mercúrio.  
        </p>
        <p className='regular-txt'>
          Para <ExternalLink href="https://www.paginasiete.bo/sociedad/2018/9/23/importacion-de-mercurio-crecio-20-veces-194729.html" language="es">os países amazônicos que assinaram a convenção em 2013, o acordo entrou em vigor em 2017 ao superar o ponto de corte de 50 ratificações</ExternalLink>. Com exceção da Colômbia e da Venezuela, todos os outros países com território no bioma - incluindo a França - já assinaram e ratificaram a Convenção de Minamata. Além disso, todos os países do bioma estão realizando projetos de acordo com a convenção. 
        </p>
        <p className='regular-txt'>
          Apesar de ainda não terem ratificado, Colômbia e a Venezuela também avançam promovendo projetos para determinar a capacidade institucional, reguladora, técnica e comercial do país, em conformidade com as obrigações da Convenção.  A Colômbia tem uma estratégia ambiciosa para eliminar o descarte irregular de mercúrio, que está incluído no plano do governo, lançado em novembro de 2018 e em vigor até 2023.
        </p>
      </EndChapter>
    </Container>
  </article>
);

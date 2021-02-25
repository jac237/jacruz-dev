import React from 'react';
import { Tooltip } from 'antd';
import styled from 'styled-components';
import { Youtube, Git } from '@styled-icons/boxicons-logos';
import { LightningFill } from '@styled-icons/bootstrap';
import { BadgeCheck } from '@styled-icons/boxicons-solid';
import {
  Css3Alt,
  Html5,
  ReactLogo,
  Soundcloud,
  Vuejs,
  Twitch,
  Hackerrank,
  StackOverflow,
} from '@styled-icons/fa-brands';
import {
  Javascript,
  Java,
  Typescript,
  Redux,
  NodeDotJs,
  Python,
  Apollographql,
  Graphql,
  Cplusplus,
  Bulma,
  Vercel,
  Heroku,
  Mongodb,
  Spotify,
  Antdesign,
  MaterialUi,
  StyledComponents,
  Microsoftteams,
  Microsoftonenote,
  Microsoftexcel,
  Microsoftoutlook,
  Microsoftword,
  Codecademy,
  Freecodecamp,
  Codesandbox,
  NextDotJs,
  Postgresql,
  Csharp,
  Hotjar,
  Doordash,
  Jest,
  ReplDotIt,
  Linktree,
  Postman,
  Angular,
  Firebase,
} from '@styled-icons/simple-icons';

const iconProps = {
  width: 80,
  height: 80,
  grayscale: 80,
  blur: 1,
  placement: 'top',
};

// const styledComponent = (component, name, color) => {
//   const StyledComponent = styled(component)`
//     width: ${props => props.width}px;
//     height: ${props => props.height}px;
//     color: ${color};
//     filter: grayscale(${iconProps.grayscale}%);
//     transition: all 0.1s ease-in-out;
//     &:hover {
//       filter: grayscale(0%);
//       transform: scale(1.2);
//     }
//   `;
//   return (
//     <Tooltip placement={iconProps.placement} title={name}>
//       <StyledComponent />
//     </Tooltip>
//   );
// };

const StyledLinktree = styled(Linktree)`
  width: 40px;
  height: 40px;
  color: #39e09b;
`;
export const LinktreeIcon = () => <StyledLinktree />;

const StyledBadgeCheck = styled(BadgeCheck)`
  width: 25px;
  height: 25px;
  color: #3897f0;
`;
export const BadgeCheckIcon = () => <StyledBadgeCheck />;

const StyledJavascript = styled(Javascript).attrs((props) => ({
  color: props.color || 'black',
  width: props.width || iconProps.width,
  height: props.height || iconProps.width,
}))`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  color: ${(props) => props.color};
  filter: grayscale(${iconProps.grayscale}%);
  transition: all 0.1s ease-in-out;
  &:hover {
    filter: grayscale(0%);
    transform: scale(1.2);
  }
`;
export const JavascriptIcon = (props) => (
  <Tooltip placement={iconProps.placement} title="Javascript">
    <StyledJavascript
      color="#f0db4f"
      height={props.height}
      width={props.width}
    />
  </Tooltip>
);

const StyledJavaIcon = styled(Java).attrs((props) => ({
  color: props.color || 'black',
  width: props.width || iconProps.width,
  height: props.height || iconProps.width,
}))`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  color: ${(props) => props.color};
  filter: grayscale(${iconProps.grayscale}%);
  transition: all 0.1s ease-in-out;
  &:hover {
    filter: grayscale(0%);
    transform: scale(1.2);
  }
`;
export const JavaIcon = (props) => (
  <Tooltip placement={iconProps.placement} title="Java">
    <StyledJavaIcon color="#5382a1" height={props.height} width={props.width} />
  </Tooltip>
);

const StyledTypescriptIcon = styled(Typescript).attrs((props) => ({
  color: props.color || 'black',
  width: props.width || iconProps.width,
  height: props.height || iconProps.width,
}))`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  color: ${(props) => props.color};
  filter: grayscale(${iconProps.grayscale}%);
  transition: all 0.1s ease-in-out;
  &:hover {
    filter: grayscale(0%);
    transform: scale(1.2);
  }
`;
export const TypescriptIcon = (props) => (
  <Tooltip placement={iconProps.placement} title="Typescript">
    <StyledTypescriptIcon
      color="#007acc"
      height={props.height}
      width={props.width}
    />
  </Tooltip>
);

const StyledReduxIcon = styled(Redux).attrs((props) => ({
  color: props.color || 'black',
  width: props.width || iconProps.width,
  height: props.height || iconProps.width,
}))`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  color: ${(props) => props.color};
  filter: grayscale(${iconProps.grayscale}%);
  transition: all 0.1s ease-in-out;
  &:hover {
    filter: grayscale(0%);
    transform: scale(1.2);
  }
`;
export const ReduxIcon = (props) => (
  <Tooltip placement={iconProps.placement} title="Redux">
    <StyledReduxIcon
      color="#764abc"
      height={props.height}
      width={props.width}
    />
  </Tooltip>
);

const StyledNodeDotJsIcon = styled(NodeDotJs).attrs((props) => ({
  color: props.color || 'black',
  width: props.width || iconProps.width,
  height: props.height || iconProps.width,
}))`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  color: ${(props) => props.color};
  filter: grayscale(${iconProps.grayscale}%);
  transition: all 0.1s ease-in-out;
  &:hover {
    filter: grayscale(0%);
    transform: scale(1.2);
  }
`;
export const NodeDotJsIcon = (props) => (
  <Tooltip placement={iconProps.placement} title="NodeJS">
    <StyledNodeDotJsIcon
      color="#68a063"
      height={props.height}
      width={props.width}
    />
  </Tooltip>
);

const StyledPythonIcon = styled(Python).attrs((props) => ({
  color: props.color || 'black',
  width: props.width || iconProps.width,
  height: props.height || iconProps.width,
}))`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  color: ${(props) => props.color};
  filter: grayscale(${iconProps.grayscale}%);
  transition: all 0.1s ease-in-out;
  &:hover {
    filter: grayscale(0%);
    transform: scale(1.2);
  }
`;
export const PythonIcon = (props) => (
  <Tooltip placement={iconProps.placement} title="Python">
    <StyledPythonIcon
      color="#FFD43B"
      height={props.height}
      width={props.width}
    />
  </Tooltip>
);

const StyledApollographqlIcon = styled(Apollographql).attrs((props) => ({
  color: props.color || 'black',
  width: props.width || iconProps.width,
  height: props.height || iconProps.width,
}))`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  color: ${(props) => props.color};
  filter: grayscale(${iconProps.grayscale}%);
  transition: all 0.1s ease-in-out;
  &:hover {
    filter: grayscale(0%);
    transform: scale(1.2);
  }
`;
export const ApollographqlIcon = (props) => (
  <Tooltip placement={iconProps.placement} title="Apollo GraphQL">
    <StyledApollographqlIcon
      color="black"
      height={props.height}
      width={props.width}
    />
  </Tooltip>
);

const StyledGraphqlIcon = styled(Graphql).attrs((props) => ({
  color: props.color || 'black',
  width: props.width || iconProps.width,
  height: props.height || iconProps.width,
}))`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  color: ${(props) => props.color};
  filter: grayscale(${iconProps.grayscale}%);
  transition: all 0.1s ease-in-out;
  &:hover {
    filter: grayscale(0%);
    transform: scale(1.2);
  }
`;
export const GraphqlIcon = (props) => (
  <Tooltip placement={iconProps.placement} title="GraphQL">
    <StyledGraphqlIcon
      color="#e535ab"
      height={props.height}
      width={props.width}
    />
  </Tooltip>
);

const StyledCplusplusIcon = styled(Cplusplus).attrs((props) => ({
  color: props.color || 'black',
  width: props.width || iconProps.width,
  height: props.height || iconProps.width,
}))`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  color: ${(props) => props.color};
  filter: grayscale(${iconProps.grayscale}%);
  transition: all 0.1s ease-in-out;
  &:hover {
    filter: grayscale(0%);
    transform: scale(1.2);
  }
`;
export const CplusplusIcon = (props) => (
  <Tooltip placement={iconProps.placement} title="C++">
    <StyledCplusplusIcon
      color="#007acc"
      height={props.height}
      width={props.width}
    />
  </Tooltip>
);

const StyledBulmaIcon = styled(Bulma).attrs((props) => ({
  color: props.color || 'black',
  width: props.width || iconProps.width,
  height: props.height || iconProps.width,
}))`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  color: ${(props) => props.color};
  filter: grayscale(${iconProps.grayscale}%);
  transition: all 0.1s ease-in-out;
  &:hover {
    filter: grayscale(0%);
    transform: scale(1.2);
  }
`;
export const BulmaIcon = (props) => (
  <Tooltip placement={iconProps.placement} title="Bulma">
    <StyledBulmaIcon
      color="#00d1b2"
      height={props.height}
      width={props.width}
    />
  </Tooltip>
);

const StyledVercelIcon = styled(Vercel).attrs((props) => ({
  color: props.color || 'black',
  width: props.width || iconProps.width,
  height: props.height || iconProps.width,
}))`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  color: ${(props) => props.color};
  filter: grayscale(${iconProps.grayscale}%);
  transition: all 0.1s ease-in-out;
  &:hover {
    filter: grayscale(0%);
    transform: scale(1.2);
  }
`;
export const VercelIcon = (props) => (
  <Tooltip placement={iconProps.placement} title="Vercel">
    <StyledVercelIcon color="black" height={props.height} width={props.width} />
  </Tooltip>
);

const StyledHerokuIcon = styled(Heroku).attrs((props) => ({
  color: props.color || 'black',
  width: props.width || iconProps.width,
  height: props.height || iconProps.width,
}))`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  color: ${(props) => props.color};
  filter: grayscale(${iconProps.grayscale}%);
  transition: all 0.1s ease-in-out;
  &:hover {
    filter: grayscale(0%);
    transform: scale(1.2);
  }
`;
export const HerokuIcon = (props) => (
  <Tooltip placement={iconProps.placement} title="Heroku">
    <StyledHerokuIcon
      color="#4c44b7"
      height={props.height}
      width={props.width}
    />
  </Tooltip>
);

const StyledMongodbIcon = styled(Mongodb).attrs((props) => ({
  color: props.color || 'black',
  width: props.width || iconProps.width,
  height: props.height || iconProps.width,
}))`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  color: ${(props) => props.color};
  filter: grayscale(${iconProps.grayscale}%);
  transition: all 0.1s ease-in-out;
  &:hover {
    filter: grayscale(0%);
    transform: scale(1.2);
  }
`;
export const MongodbIcon = (props) => (
  <Tooltip placement={iconProps.placement} title="Mongodb">
    <StyledMongodbIcon
      color="#4DB33D"
      height={props.height}
      width={props.width}
    />
  </Tooltip>
);

const StyledSpotifyIcon = styled(Spotify).attrs((props) => ({
  color: props.color || 'black',
  width: props.width || iconProps.width,
  height: props.height || iconProps.width,
}))`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  color: ${(props) => props.color};
  filter: grayscale(${iconProps.grayscale}%);
  transition: all 0.1s ease-in-out;
  &:hover {
    filter: grayscale(0%);
    transform: scale(1.2);
  }
`;
export const SpotifyIcon = (props) => (
  <Tooltip placement={iconProps.placement} title="Spotify">
    <StyledSpotifyIcon
      color="#1DB954"
      height={props.height}
      width={props.width}
    />
  </Tooltip>
);

const StyledAntdesignIcon = styled(Antdesign).attrs((props) => ({
  color: props.color || 'black',
  width: props.width || iconProps.width,
  height: props.height || iconProps.width,
}))`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  color: ${(props) => props.color};
  filter: grayscale(${iconProps.grayscale}%);
  transition: all 0.1s ease-in-out;
  &:hover {
    filter: grayscale(0%);
    transform: scale(1.2);
  }
`;
export const AntdesignIcon = (props) => (
  <Tooltip placement={iconProps.placement} title="Antdesign">
    <StyledAntdesignIcon
      color="#40a9ff"
      height={props.height}
      width={props.width}
    />
  </Tooltip>
);

const StyledMaterialUiIcon = styled(MaterialUi).attrs((props) => ({
  color: props.color || 'black',
  width: props.width || iconProps.width,
  height: props.height || iconProps.width,
}))`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  color: ${(props) => props.color};
  filter: grayscale(${iconProps.grayscale}%);
  transition: all 0.1s ease-in-out;
  &:hover {
    filter: grayscale(0%);
    transform: scale(1.2);
  }
`;
export const MaterialUiIcon = (props) => (
  <Tooltip placement={iconProps.placement} title="Material-Ui">
    <StyledMaterialUiIcon
      color="#03a9f4"
      height={props.height}
      width={props.width}
    />
  </Tooltip>
);

const StyledStyledComponentsIcon = styled(StyledComponents).attrs((props) => ({
  color: props.color || 'black',
  width: props.width || iconProps.width,
  height: props.height || iconProps.width,
}))`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  color: ${(props) => props.color};
  filter: grayscale(${iconProps.grayscale}%);
  transition: all 0.1s ease-in-out;
  &:hover {
    filter: grayscale(0%);
    transform: scale(1.2);
  }
`;
export const StyledComponentsIcon = (props) => (
  <Tooltip placement={iconProps.placement} title="StyledComponents">
    <StyledStyledComponentsIcon
      color="gold"
      height={props.height}
      width={props.width}
    />
  </Tooltip>
);

const StyledMicrosoftteamsIcon = styled(Microsoftteams).attrs((props) => ({
  color: props.color || 'black',
  width: props.width || iconProps.width,
  height: props.height || iconProps.width,
}))`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  color: ${(props) => props.color};
  filter: grayscale(${iconProps.grayscale}%);
  transition: all 0.1s ease-in-out;
  &:hover {
    filter: grayscale(0%);
    transform: scale(1.2);
  }
`;
export const MicrosoftteamsIcon = (props) => (
  <Tooltip placement={iconProps.placement} title="Teams">
    <StyledMicrosoftteamsIcon
      color="#505AC9"
      height={props.height}
      width={props.width}
    />
  </Tooltip>
);

const StyledMicrosoftonenoteIcon = styled(Microsoftonenote).attrs((props) => ({
  color: props.color || 'black',
  width: props.width || iconProps.width,
  height: props.height || iconProps.width,
}))`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  color: ${(props) => props.color};
  filter: grayscale(${iconProps.grayscale}%);
  transition: all 0.1s ease-in-out;
  &:hover {
    filter: grayscale(0%);
    transform: scale(1.2);
  }
`;
export const MicrosoftonenoteIcon = (props) => (
  <Tooltip placement={iconProps.placement} title="OneNote">
    <StyledMicrosoftonenoteIcon
      color="#7719AA"
      height={props.height}
      width={props.width}
    />
  </Tooltip>
);

const StyledMicrosoftexcelIcon = styled(Microsoftexcel).attrs((props) => ({
  color: props.color || 'black',
  width: props.width || iconProps.width,
  height: props.height || iconProps.width,
}))`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  color: ${(props) => props.color};
  filter: grayscale(${iconProps.grayscale}%);
  transition: all 0.1s ease-in-out;
  &:hover {
    filter: grayscale(0%);
    transform: scale(1.2);
  }
`;
export const MicrosoftexcelIcon = (props) => (
  <Tooltip placement={iconProps.placement} title="Excel">
    <StyledMicrosoftexcelIcon
      color="#1D6F42"
      height={props.height}
      width={props.width}
    />
  </Tooltip>
);

const StyledMicrosoftoutlookIcon = styled(Microsoftoutlook).attrs((props) => ({
  color: props.color || 'black',
  width: props.width || iconProps.width,
  height: props.height || iconProps.width,
}))`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  color: ${(props) => props.color};
  filter: grayscale(${iconProps.grayscale}%);
  transition: all 0.1s ease-in-out;
  &:hover {
    filter: grayscale(0%);
    transform: scale(1.2);
  }
`;
export const MicrosoftoutlookIcon = (props) => (
  <Tooltip placement={iconProps.placement} title="Outlook">
    <StyledMicrosoftoutlookIcon
      color="#0072C6"
      height={props.height}
      width={props.width}
    />
  </Tooltip>
);

const StyledCss3AltIcon = styled(Css3Alt).attrs((props) => ({
  color: props.color || 'black',
  width: props.width || iconProps.width,
  height: props.height || iconProps.width,
}))`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  color: ${(props) => props.color};
  filter: grayscale(${iconProps.grayscale}%);
  transition: all 0.1s ease-in-out;
  &:hover {
    filter: grayscale(0%);
    transform: scale(1.2);
  }
`;
export const Css3AltIcon = (props) => (
  <Tooltip placement={iconProps.placement} title="CSS">
    <StyledCss3AltIcon
      color="#3c99dc"
      height={props.height}
      width={props.width}
    />
  </Tooltip>
);

const StyledHtml5Icon = styled(Html5).attrs((props) => ({
  color: props.color || 'black',
  width: props.width || iconProps.width,
  height: props.height || iconProps.width,
}))`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  color: ${(props) => props.color};
  filter: grayscale(${iconProps.grayscale}%);
  transition: all 0.1s ease-in-out;
  &:hover {
    filter: grayscale(0%);
    transform: scale(1.2);
  }
`;
export const Html5Icon = (props) => (
  <Tooltip placement={iconProps.placement} title="Html5">
    <StyledHtml5Icon
      color="#f06529"
      height={props.height}
      width={props.width}
    />
  </Tooltip>
);

const StyledReactLogoIcon = styled(ReactLogo).attrs((props) => ({
  color: props.color || 'black',
  width: props.width || iconProps.width,
  height: props.height || iconProps.width,
}))`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  color: ${(props) => props.color};
  filter: grayscale(${iconProps.grayscale}%);
  transition: all 0.1s ease-in-out;
  &:hover {
    filter: grayscale(0%);
    transform: scale(1.2);
  }
`;
export const ReactLogoIcon = (props) => (
  <Tooltip placement={iconProps.placement} title="React">
    <StyledReactLogoIcon
      color="#61DBFB"
      height={props.height}
      width={props.width}
    />
  </Tooltip>
);

const StyledSoundcloudIcon = styled(Soundcloud).attrs((props) => ({
  color: props.color || 'black',
  width: props.width || iconProps.width,
  height: props.height || iconProps.width,
}))`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  color: ${(props) => props.color};
  filter: grayscale(${iconProps.grayscale}%);
  transition: all 0.1s ease-in-out;
  &:hover {
    filter: grayscale(0%);
    transform: scale(1.2);
  }
`;
export const SoundcloudIcon = (props) => (
  <Tooltip placement={iconProps.placement} title="Soundcloud">
    <StyledSoundcloudIcon
      color="#FF7F34"
      height={props.height}
      width={props.width}
    />
  </Tooltip>
);

const StyledVuejsIcon = styled(Vuejs).attrs((props) => ({
  color: props.color || 'black',
  width: props.width || iconProps.width,
  height: props.height || iconProps.width,
}))`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  color: ${(props) => props.color};
  filter: grayscale(${iconProps.grayscale}%);
  transition: all 0.1s ease-in-out;
  &:hover {
    filter: grayscale(0%);
    transform: scale(1.2);
  }
`;
export const VuejsIcon = (props) => (
  <Tooltip placement={iconProps.placement} title="VueJS">
    <StyledVuejsIcon
      color="#42b883"
      height={props.height}
      width={props.width}
    />
  </Tooltip>
);

const StyledTwitchIcon = styled(Twitch).attrs((props) => ({
  color: props.color || 'black',
  width: props.width || iconProps.width,
  height: props.height || iconProps.width,
}))`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  color: ${(props) => props.color};
  filter: grayscale(${iconProps.grayscale}%);
  transition: all 0.1s ease-in-out;
  &:hover {
    filter: grayscale(0%);
    transform: scale(1.2);
  }
`;
export const TwitchIcon = (props) => (
  <Tooltip placement={iconProps.placement} title="Twitch">
    <StyledTwitchIcon
      color="#6441A4"
      height={props.height}
      width={props.width}
    />
  </Tooltip>
);

const StyledYoutubeIcon = styled(Youtube).attrs((props) => ({
  color: props.color || 'black',
  width: props.width || iconProps.width,
  height: props.height || iconProps.width,
}))`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  color: ${(props) => props.color};
  filter: grayscale(${iconProps.grayscale}%);
  transition: all 0.1s ease-in-out;
  &:hover {
    filter: grayscale(0%);
    transform: scale(1.2);
  }
`;
export const YoutubeIcon = (props) => (
  <Tooltip placement={iconProps.placement} title="Youtube">
    <StyledYoutubeIcon
      color="#FF0000"
      height={props.height}
      width={props.width}
    />
  </Tooltip>
);

const StyledGitIcon = styled(Git).attrs((props) => ({
  color: props.color || 'black',
  width: props.width || iconProps.width,
  height: props.height || iconProps.width,
}))`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  color: ${(props) => props.color};
  filter: grayscale(${iconProps.grayscale}%);
  transition: all 0.1s ease-in-out;
  &:hover {
    filter: grayscale(0%);
    transform: scale(1.2);
  }
`;
export const GitIcon = (props) => (
  <Tooltip placement={iconProps.placement} title="Git">
    <StyledGitIcon color="#f34f29" height={props.height} width={props.width} />
  </Tooltip>
);

const StyledStackblitzIcon = styled(LightningFill).attrs((props) => ({
  color: props.color || 'black',
  width: props.width || iconProps.width,
  height: props.height || iconProps.width,
}))`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  color: ${(props) => props.color};
  filter: grayscale(${iconProps.grayscale}%);
  transition: all 0.1s ease-in-out;
  &:hover {
    filter: grayscale(0%);
    transform: scale(1.2);
  }
`;
export const StackblitzIcon = (props) => (
  <Tooltip placement={iconProps.placement} title="Stackblitz">
    <StyledStackblitzIcon
      color="#1389FD"
      height={props.height}
      width={props.width}
    />
  </Tooltip>
);

const StyledHackerrankIcon = styled(Hackerrank).attrs((props) => ({
  color: props.color || 'black',
  width: props.width || iconProps.width,
  height: props.height || iconProps.width,
}))`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  color: ${(props) => props.color};
  filter: grayscale(${iconProps.grayscale}%);
  transition: all 0.1s ease-in-out;
  &:hover {
    filter: grayscale(0%);
    transform: scale(1.2);
  }
`;
export const HackerrankIcon = (props) => (
  <Tooltip placement={iconProps.placement} title="Hackerrank">
    <StyledHackerrankIcon
      color="#1ba94c"
      height={props.height}
      width={props.width}
    />
  </Tooltip>
);

const StyledStackOverflowIcon = styled(StackOverflow).attrs((props) => ({
  color: props.color || 'black',
  width: props.width || iconProps.width,
  height: props.height || iconProps.width,
}))`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  color: ${(props) => props.color};
  filter: grayscale(${iconProps.grayscale}%);
  transition: all 0.1s ease-in-out;
  &:hover {
    filter: grayscale(0%);
    transform: scale(1.2);
  }
`;
export const StackOverflowIcon = (props) => (
  <Tooltip placement={iconProps.placement} title="StackOverflow">
    <StyledStackOverflowIcon
      color="#f48024"
      height={props.height}
      width={props.width}
    />
  </Tooltip>
);

const StyledMicrosoftwordIcon = styled(Microsoftword).attrs((props) => ({
  color: props.color || 'black',
  width: props.width || iconProps.width,
  height: props.height || iconProps.width,
}))`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  color: ${(props) => props.color};
  filter: grayscale(${iconProps.grayscale}%);
  transition: all 0.1s ease-in-out;
  &:hover {
    filter: grayscale(0%);
    transform: scale(1.2);
  }
`;
export const MicrosoftwordIcon = (props) => (
  <Tooltip placement={iconProps.placement} title="Word">
    <StyledMicrosoftwordIcon
      color="#0067b8"
      height={props.height}
      width={props.width}
    />
  </Tooltip>
);

const StyledCodecademyIcon = styled(Codecademy).attrs((props) => ({
  color: props.color || 'black',
  width: props.width || iconProps.width,
  height: props.height || iconProps.width,
}))`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  color: ${(props) => props.color};
  filter: grayscale(${iconProps.grayscale}%);
  transition: all 0.1s ease-in-out;
  &:hover {
    filter: grayscale(0%);
    transform: scale(1.2);
  }
`;
export const CodecademyIcon = (props) => (
  <Tooltip placement={iconProps.placement} title="Codecademy">
    <StyledCodecademyIcon
      color="#204056"
      height={props.height}
      width={props.width}
    />
  </Tooltip>
);

const StyledFreecodecampIcon = styled(Freecodecamp).attrs((props) => ({
  color: props.color || 'black',
  width: props.width || iconProps.width,
  height: props.height || iconProps.width,
}))`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  color: ${(props) => props.color};
  filter: grayscale(${iconProps.grayscale}%);
  transition: all 0.1s ease-in-out;
  &:hover {
    filter: grayscale(0%);
    transform: scale(1.2);
  }
`;
export const FreecodecampIcon = (props) => (
  <Tooltip placement={iconProps.placement} title="Freecodecamp">
    <StyledFreecodecampIcon
      color="#0a0a23"
      height={props.height}
      width={props.width}
    />
  </Tooltip>
);

const StyledCodesandboxIcon = styled(Codesandbox).attrs((props) => ({
  color: props.color || 'black',
  width: props.width || iconProps.width,
  height: props.height || iconProps.width,
}))`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  color: ${(props) => props.color};
  filter: grayscale(${iconProps.grayscale}%);
  transition: all 0.1s ease-in-out;
  &:hover {
    filter: grayscale(0%);
    transform: scale(1.2);
  }
`;
export const CodesandboxIcon = (props) => (
  <Tooltip placement={iconProps.placement} title="Codesandbox">
    <StyledCodesandboxIcon
      color="#black"
      height={props.height}
      width={props.width}
    />
  </Tooltip>
);

const StyledNextDotJsIcon = styled(NextDotJs).attrs((props) => ({
  color: props.color || 'black',
  width: props.width || iconProps.width,
  height: props.height || iconProps.width,
}))`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  color: ${(props) => props.color};
  filter: grayscale(${iconProps.grayscale}%);
  transition: all 0.1s ease-in-out;
  &:hover {
    filter: grayscale(0%);
    transform: scale(1.2);
  }
`;
export const NextDotJsIcon = (props) => (
  <Tooltip placement={iconProps.placement} title="NextJs">
    <StyledNextDotJsIcon
      color="black"
      height={props.height}
      width={props.width}
    />
  </Tooltip>
);

const StyledPostgresqlIcon = styled(Postgresql).attrs((props) => ({
  color: props.color || 'black',
  width: props.width || iconProps.width,
  height: props.height || iconProps.width,
}))`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  color: ${(props) => props.color};
  filter: grayscale(${iconProps.grayscale}%);
  transition: all 0.1s ease-in-out;
  &:hover {
    filter: grayscale(0%);
    transform: scale(1.2);
  }
`;
export const PostgresqlIcon = (props) => (
  <Tooltip placement={iconProps.placement} title="Postgresql">
    <StyledPostgresqlIcon
      color="#0064a5"
      height={props.height}
      width={props.width}
    />
  </Tooltip>
);

const StyledCsharpIcon = styled(Csharp).attrs((props) => ({
  color: props.color || 'black',
  width: props.width || iconProps.width,
  height: props.height || iconProps.width,
}))`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  color: ${(props) => props.color};
  filter: grayscale(${iconProps.grayscale}%);
  transition: all 0.1s ease-in-out;
  &:hover {
    filter: grayscale(0%);
    transform: scale(1.2);
  }
`;
export const CsharpIcon = (props) => (
  <Tooltip placement={iconProps.placement} title="C#">
    <StyledCsharpIcon
      color="#7719AA"
      height={props.height}
      width={props.width}
    />
  </Tooltip>
);

const StyledHotjarIcon = styled(Hotjar).attrs((props) => ({
  color: props.color || 'black',
  width: props.width || iconProps.width,
  height: props.height || iconProps.width,
}))`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  color: ${(props) => props.color};
  filter: grayscale(${iconProps.grayscale}%);
  transition: all 0.1s ease-in-out;
  &:hover {
    filter: grayscale(0%);
    transform: scale(1.2);
  }
`;
export const HotjarIcon = (props) => (
  <Tooltip placement={iconProps.placement} title="Hotjar">
    <StyledHotjarIcon
      color="#f4364c"
      height={props.height}
      width={props.width}
    />
  </Tooltip>
);

const StyledDoordashIcon = styled(Doordash).attrs((props) => ({
  color: props.color || 'black',
  width: props.width || iconProps.width,
  height: props.height || iconProps.width,
}))`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  color: ${(props) => props.color};
  filter: grayscale(${iconProps.grayscale}%);
  transition: all 0.1s ease-in-out;
  &:hover {
    filter: grayscale(0%);
    transform: scale(1.2);
  }
`;
export const DoordashIcon = (props) => (
  <Tooltip placement={iconProps.placement} title="Doordash Driver">
    <StyledDoordashIcon
      color="#FF3008"
      height={props.height}
      width={props.width}
    />
  </Tooltip>
);

const StyledJestIcon = styled(Jest).attrs((props) => ({
  color: props.color || 'black',
  width: props.width || iconProps.width,
  height: props.height || iconProps.width,
}))`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  color: ${(props) => props.color};
  filter: grayscale(${iconProps.grayscale}%);
  transition: all 0.1s ease-in-out;
  &:hover {
    filter: grayscale(0%);
    transform: scale(1.2);
  }
`;
export const JestIcon = (props) => (
  <Tooltip placement={iconProps.placement} title="Jest">
    <StyledJestIcon color="#15c213" height={props.height} width={props.width} />
  </Tooltip>
);

const StyledReplDotItIcon = styled(ReplDotIt).attrs((props) => ({
  color: props.color || 'black',
  width: props.width || iconProps.width,
  height: props.height || iconProps.width,
}))`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  color: ${(props) => props.color};
  filter: grayscale(${iconProps.grayscale}%);
  transition: all 0.1s ease-in-out;
  &:hover {
    filter: grayscale(0%);
    transform: scale(1.2);
  }
`;
export const ReplDotItIcon = (props) => (
  <Tooltip placement={iconProps.placement} title="Repl.It">
    <StyledReplDotItIcon
      color="#989ba1"
      height={props.height}
      width={props.width}
    />
  </Tooltip>
);

const StyledPostmanIcon = styled(Postman).attrs((props) => ({
  color: props.color || 'black',
  width: props.width || iconProps.width,
  height: props.height || iconProps.width,
}))`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  color: ${(props) => props.color};
  filter: grayscale(${iconProps.grayscale}%);
  transition: all 0.1s ease-in-out;
  &:hover {
    filter: grayscale(0%);
    transform: scale(1.2);
  }
`;
export const PostmanIcon = (props) => (
  <Tooltip placement={iconProps.placement} title="Postman">
    <StyledPostmanIcon
      color="#EF5B25"
      height={props.height}
      width={props.width}
    />
  </Tooltip>
);

const StyledAngularIcon = styled(Angular).attrs((props) => ({
  color: props.color || 'black',
  width: props.width || iconProps.width,
  height: props.height || iconProps.width,
}))`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  color: ${(props) => props.color};
  filter: grayscale(${iconProps.grayscale}%);
  transition: all 0.1s ease-in-out;
  &:hover {
    filter: grayscale(0%);
    transform: scale(1.2);
  }
`;
export const AngularIcon = (props) => (
  <Tooltip placement={iconProps.placement} title="Angular">
    <StyledAngularIcon
      color="#B52E31"
      height={props.height}
      width={props.width}
    />
  </Tooltip>
);

const StyledFirebaseIcon = styled(Firebase).attrs((props) => ({
  color: props.color || 'black',
  width: props.width || iconProps.width,
  height: props.height || iconProps.width,
}))`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  color: ${(props) => props.color};
  filter: grayscale(${iconProps.grayscale}%);
  transition: all 0.1s ease-in-out;
  &:hover {
    filter: grayscale(0%);
    transform: scale(1.2);
  }
`;
export const FirebaseIcon = (props) => (
  <Tooltip placement={iconProps.placement} title="Firebase">
    <StyledFirebaseIcon
      color="#FFCB2B"
      height={props.height}
      width={props.width}
    />
  </Tooltip>
);

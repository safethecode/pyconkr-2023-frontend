import { styled } from '@/stitches.config';
import { H3 } from '@/components/heading';
import { SimpleCardProps } from '../types';
import * as S from '../styles';

const CardWrapper = styled('div', {
  border: '1px solid $textPrimary',
  width: '100%',

  '@bp1': {
    maxWidth: '300px',
    maxHeight: '300px',
    padding: '1rem 1rem',
  },

  '@bp2': {
    minWidth: '250px',
    maxHeight: '400px',
    padding: '2rem 1.5rem',
  },

  '@bp5': {
    maxWidth: '305px',
    maxHeight: '400px',
    padding: '2rem 1.5rem',
  },

  '@bp6': {
    maxWidth: '425px',
    padding: '2rem 2rem',
  },
});

const Spacing = styled('div', {
  marginTop: '1.3rem',
});

export const SimpleCard = ({ id, title, description }: SimpleCardProps) => (
  <CardWrapper>
    <H3>{`0${id}`}</H3>
    <H3>{title}</H3>
    <Spacing />
    <S.BodyText>{description}</S.BodyText>
  </CardWrapper>
);

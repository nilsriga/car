import { graphql, useStaticQuery } from 'gatsby';
import { MoonIcon } from '../../Icons/DarkMode';
import { Button } from './styles';
import { usePageLocale } from '../../../../hooks/usePageLocale';

export const DarkModeToggle = ({ hideOnMobile }) => {
  const data = useStaticQuery(graphql`
    query {
      allDatoCmsMiscTextString {
        nodes {
          locale
          enableDarkModeAriaLabel
          disableDarkModeAriaLabel
        }
      }
    }
  `);

  const { pageLocale } = usePageLocale();

  const { disableDarkModeAriaLabel } = data.allDatoCmsMiscTextString.nodes.find(
    ({ locale }) => locale === pageLocale
  );

  return (
    <Button
      role="switch"
      hideOnMobile={hideOnMobile}
      aria-checked={false} // Set to false for light theme (default)
      aria-label={disableDarkModeAriaLabel} // Use label for disabling dark mode
    >
      <MoonIcon /> {/* Show MoonIcon for light theme (default) */}
    </Button>
  );
};

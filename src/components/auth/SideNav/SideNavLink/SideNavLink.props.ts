export default interface SideNavLinkProps {
  url: string;
  icon: string;
  title: string;
  onClick?: () => void;
  children?: {
    url: string;
    title: string;
  }[];
}

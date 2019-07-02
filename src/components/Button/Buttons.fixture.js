import React from "react";
import Button from ".";
import { ReactComponent as Bookmark } from "../../icons/bookmark.svg";
import Icon from "../Icon";

const BookmarkIcon = props => (
  <Icon>
    <Bookmark />
  </Icon>
);

export default {
  default: <Button>Touch me</Button>,
  defaultDisabled: <Button disabled>Touch me</Button>,
  defaultWithIcon: <Button icon={<BookmarkIcon />}>Add bookmark</Button>,
  defaultWithIconReverse: (
    <Button icon={<BookmarkIcon />} reverse>
      Add bookmark
    </Button>
  ),
  defaultWithIconDisabled: (
    <Button icon={<BookmarkIcon />} disabled>
      Add bookmark
    </Button>
  ),
  primary: <Button variant="primary">Touch me</Button>,
  primaryDisabled: (
    <Button variant="primary" disabled>
      Touch me
    </Button>
  ),
  primaryWithIcon: (
    <Button icon={<BookmarkIcon />} variant="primary">
      Add bookmark
    </Button>
  ),
  primaryWithIconDisabled: (
    <Button icon={<BookmarkIcon />} variant="primary" disabled>
      Add bookmark
    </Button>
  ),
  plain: <Button variant="plain">Touch me</Button>,
  plainDisabled: (
    <Button variant="plain" disabled>
      Touch me
    </Button>
  ),
  plainWithIcon: (
    <Button icon={<BookmarkIcon />} variant="plain">
      Add bookmark
    </Button>
  ),
  plainWithIconDisabled: (
    <Button icon={<BookmarkIcon />} variant="plain" disabled>
      Add bookmark
    </Button>
  ),
  iconOnlyDefault: <Button icon={<BookmarkIcon />} />,
  iconOnlyDefaultDisabled: <Button icon={<BookmarkIcon />} disabled />,
  iconOnlyPrimary: <Button icon={<BookmarkIcon />} variant="primary" />,
  iconOnlyPrimaryDisabled: (
    <Button icon={<BookmarkIcon />} variant="primary" disabled />
  )
};

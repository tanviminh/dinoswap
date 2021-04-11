import { Layout, Menu } from "antd";
import { Colors, Icons, Images } from "assets";
import { ICol, IRow, ISpace } from "components";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

interface ChildProps {
  collapsed: boolean;
  item: ItemProps;
}
interface ItemProps {
  title: string;
  icon?: string;
  link: string;
  childs?: ItemProps[];
}

const items: ItemProps[] = [
  { title: "Home / Beginer", icon: Icons.HOME, link: "/", childs: [] },
  {
    title: "Swap / Trade",
    icon: Icons.SWAP,
    link: "/swap",
    childs: [],
  },

  { title: "Pools", icon: Icons.POOL, link: "/app/dino-pool", childs: [] },
  { title: "Farm", icon: Icons.FARM, link: "/farm", childs: [] },
  { title: "Team & Profile", icon: Icons.TEAM, link: "/", childs: [] },
  { title: "Governance", icon: Icons.GOVERNANCE, link: "/", childs: [] },
  {
    title: "Forum",
    icon: Icons.FORUM,
    link: "/",
    childs: [
      {
        title: "Docs",
        icon: Icons.ETH,
        link: "/doc",
        childs: [{ title: "Child", link: "/aaa" }],
      },
      {
        title: "Discord",
        icon: Icons.ETH,
        link: "/",
        childs: [{ title: "Child", link: "/aaa" }],
      },
      {
        title: "Twitter",
        icon: Icons.ETH,
        link: "/",
        childs: [{ title: "Child", link: "/aaa" }],
      },
      {
        title: "Wechat",
        icon: Icons.ETH,
        link: "/",
        childs: [{ title: "Child", link: "/aaa" }],
      },
    ],
  },
];

export function SliderComponent() {
  const [collapsed, setCollapsed] = useState(false);
  const [isOpened, setOpend] = useState(true);

  function onCollapse(collapsed: boolean) {
    console.log(collapsed);
    setCollapsed(collapsed);
  }

  return (
    <Sider
      width={336}
      // collapsible
      collapsed={collapsed}
      onCollapse={onCollapse}
      onTransitionEnd={() => {
        if (collapsed) {
          setOpend(false);
          return;
        }
        setOpend(true);
      }}
      style={{ background: "white" }}
    >
      <IRow>
        <ICol>
          <IRow style={{ height: 72 }}>
            <ISpace size={40} style={{ paddingLeft: "30px" }}>
              <img
                src={Icons.MENU}
                style={{
                  height: 32,
                  cursor: "pointer",
                  transform: collapsed ? "rotateY(180deg)" : "none",
                }}
                onClick={() => {
                  setCollapsed(!collapsed);
                }}
              />
              <img
                src={Images.LOGO}
                style={{ width: "60%", height: isOpened ? "auto" : 0 }}
              />
            </ISpace>
          </IRow>

          <div style={{ width: "100%", height: 1, background: Colors.LINE }} />
          {items.map((item: ItemProps, index) => {
            return <Item collapsed={collapsed} item={item} />;
          })}
          <br />
          <br />
          <Item
            collapsed={collapsed}
            item={{
              title: "ENG",
              icon: Icons.ENG,
              link: "/",
            }}
          />
        </ICol>
      </IRow>
    </Sider>
  );
}

function Item(props: ChildProps) {
  let history = useHistory();
  const [open, setOpen] = useState(false);
  const [showArrow, setShowArrow] = useState(false);
  const { item } = props;
  const { title, link, icon, childs } = item;
  const { collapsed } = props;
  useEffect(() => {
    // console.log(collapsed);
    if (collapsed) {
      setShowArrow(false);
      return;
    }
    setTimeout(() => {
      setShowArrow(true);
    }, 200);
  });

  return (
    <div>
      <IRow
        style={{ height: 60, cursor: "pointer", overflow: "hidden" }}
        align="middle"
        onClick={() => {
          if (childs?.length) {
            setOpen(!open);
            return;
          }
          history.push(item.link);
        }}
      >
        <ICol flex="auto">
          <ISpace
            size={40}
            style={{
              paddingLeft: "30px",
              cursor: "pointer",
              width: "100%",
            }}
          >
            <img src={icon} style={{ width: 24, cursor: "pointer" }} />

            <span
              className="no-wrap"
              style={{ fontWeight: "bolder", color: Colors.LIGHT_BROWN }}
            >
              {title}
            </span>
          </ISpace>
        </ICol>
        <ICol>
          {!collapsed && childs?.length && showArrow ? (
            <img
              src={Icons.DOWN_BROWN}
              style={{
                width: 24,
                cursor: "pointer",
                marginRight: 20,
                transform: open ? "rotateX(180deg)" : "none",
              }}
            />
          ) : null}
        </ICol>
      </IRow>

      {childs?.length && open && !collapsed
        ? childs.map((item, index) => {
            return (
              <IRow
                align="middle"
                style={{
                  height: 48,
                  background: Colors.LINE,
                  paddingLeft: 64,
                  cursor: "pointer",
                }}
                key={index}
                onClick={() => {
                  history.push("/doc");
                }}
              >
                <span style={{ color: Colors.TEXT_GRAY }}>{item.title}</span>
              </IRow>
            );
          })
        : null}
    </div>
  );
}

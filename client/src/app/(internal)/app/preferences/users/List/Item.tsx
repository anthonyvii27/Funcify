"use client";

import { DeleteUserModal } from "@/app/(internal)/app/preferences/users/DeleteUserModal";
import { EditUserModal } from "@/app/(internal)/app/preferences/users/EditUserModal/EditUserModal";
import { Dropdown } from "@/components/Dropdown";
import { UserSchema } from "@/types/user";
import { ReactNode, useState } from "react";
import { MdDelete, MdEdit } from "react-icons/md";
import { TbDots } from "react-icons/tb";

import { Root, Email, Text, Actions } from "./Item.styles";

type Props = UserSchema;

const Item = (props: Props): ReactNode => {
    const [modalEditOpen, setModalEditOpen] = useState<boolean>(false);
    const [modalDeleteOpen, setModalDeleteOpen] = useState<boolean>(false);

    return (
        <Root>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <Email>{props.email}</Email>
                <Dropdown>
                    <Dropdown.Trigger>
                        <Actions>
                            <TbDots size={18} />
                        </Actions>
                    </Dropdown.Trigger>
                    <Dropdown.Content>
                        <Dropdown.Item onClick={() => setModalEditOpen(true)}>
                            <MdEdit />
                            Edit user e-mail
                        </Dropdown.Item>
                        <Dropdown.Item onClick={() => setModalDeleteOpen(true)}>
                            <MdDelete />
                            Delete user
                        </Dropdown.Item>
                    </Dropdown.Content>
                </Dropdown>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <Text>
                    <strong>Role:</strong> {props.role}
                </Text>
                <Text>
                    <strong>Criado em:</strong> {props.createdAt}
                </Text>
            </div>

            <div style={{ position: "absolute" }}>
                <DeleteUserModal open={modalDeleteOpen} setOpen={setModalDeleteOpen} {...props} />
                <EditUserModal open={modalEditOpen} setOpen={setModalEditOpen} {...props} />
            </div>
        </Root>
    );
};

export { Item };

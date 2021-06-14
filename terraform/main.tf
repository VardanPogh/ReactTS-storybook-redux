terraform {
  backend "remote" {
    organization = "batnav"

    workspaces {
      name = "batnav_ui"
    }
  }
}

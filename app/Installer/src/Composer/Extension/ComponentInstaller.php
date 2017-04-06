<?php

declare(strict_types=1);

namespace Installer\Composer\Extension;

class ComponentInstaller extends ExtensionInstaller {

    /**
     * {@inheritDoc}
     */
    public function getPackageSubType() {
        return 'component';
    }

	/**
	 * {@inheritDoc}
	 */
	public function getPackageDirectory() {
		return 'components';
	}

}
